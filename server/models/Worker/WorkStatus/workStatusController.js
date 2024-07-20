const workstatusschema = require("./workStatusSchema.js");
const customerSchema = require('../../customer/customerSchema.js')
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'supprot.web.application@gmail.com',
    pass: 'ukyw olqq kuql jnty'
  }
});

const sendMail = (toMail, otp, payment) => {
  let email = toMail
  const mailOptions = {
    from: 'supprot.web.application@gmail.com',
    to: email,
    subject: 'OTP Verification From Blue_Collar',
    text: `Dear Customer ,${'\n'}

Thank you for choosing our service.

To complete your work verification and proceed with the payment, please use the following One-Time Password (OTP):${'\n'}

Your OTP is:  ${otp}${'\n'}
Amount Payable : ${payment}

Please do not share this OTP with anyone for security reasons.

If you did not request this OTP, please contact our support team immediately.

Thank you for your cooperation${'\n'}
Best regards,${'\n'}
Blue Collar Team`
  }

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log('Error:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}



const addworkstatus = async (req, res) => {
  let custData = await customerSchema.findById(req.body.customerId)
  const workstatus = new workstatusschema({
    jobid: req.params.id,
    workerId: req.body.workerId,
    customerId: req.body.customerId,
    status: 'completed',
    payment: req.body.payment,
    otp: req.body.otp,

  });
  await workstatus
    .save()
    .then((data) => {
      sendMail(custData.email, req.body.otp, req.body.payment)

      res.json({
        status: 200,
        msg: "Inserted Successfully",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        status: 500,
        err: err
      })
    });
};



const OTPVerification = async (req, res) => {
   workstatusschema.findOne({ jobid: req.body.jobid, customerId: req.body.customerId }).then(data=>{

console.log("data",data);
  if (data.otp == req.body.otp) {
    if (data.payment == req.body.payment) {
      
      return  res.json({
          status: 200,
          msg: "OTP and Payment is Verified"
          
        });
      
    }
   else{
    res.json({
      status: 405,
        msg: "Payment Amount did not Match !!"
    })
   }
  }
  else{
    res.json({
      status: 405,
        msg: "OTP did not Match !!"
    })
   }
  })
  .catch((err) => {
    console.log(err);
    res.json({
      status: 500,
        msg: "Internal Error !!"
    })
  })

}
module.exports = {
  addworkstatus,
  OTPVerification
}