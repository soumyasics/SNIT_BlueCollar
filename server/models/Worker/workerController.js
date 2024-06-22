const workerschema=require("./workerSchema")
const multer=require ("multer")
const jwt = require("jsonwebtoken");
const secret="secret_key"



const storage = multer.diskStorage({
    destination: function (req, res, cb) {
      cb(null, "./upload");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
  
  const upload = multer({ storage: storage }).single("image");

  const registerworker = (req, res) => {
    const workers = new workerschema({
      name: req.body.name,
      workertype:req.body.workertype,
      address:req.body.address,
      location:req.body.location,
      city:req.body.city,
      state:req.body.state,
      contact: req.body.contact,
      email: req.body.email,
      password: req.body.password,
      image: req.file,
    });
    workers
      .save()
      .then((data) => {
        res.json({
          status: 200,
          msg: "Inserted Successfully",
          data: data,
        });
      })
      .catch((err) => {
        if (err.code === 11000) {
          let errMsg = "Data not Inserted";
          if (err.keyPattern.hasOwnProperty("contact")) {
            errMsg = "Contact already in Use";
          } else if (err.keyPattern.hasOwnProperty("email")) {
            errMsg = "Email Id already in Use";
          } 
          return res.status(409).json({
            status: 409,
            msg: errMsg,
            Error: err,
          });
        }
        res.status(500).json({
          status: 500,
          msg: "Data not Inserted",
          Error: err,
        });
      });
  };
  const verifyToken = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
  
    console.log("t1",token);
    console.log("secret",secret);
    if (!token) {
      return res.json({status:401,msg: 'Unauthorized' });
    }
    jwt.verify(token, secret, (err, decodedToken) => {
      console.log(decodedToken);
      if (err) {
        return res.json({status:401, messagge: 'Unauthorized' ,err:err});
      }
  
      req.user = decodedToken.userId;
      next();
      return res.json({ status:200,msg: 'ok' ,user:decodedToken.userId});
    });
    console.log(req.user);
  };
  //token decode api

  const workerLogin = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await workerschema.findOne({ email: email });
  
      if (user) {
       if (user.password === password) {
          const token = jwt.sign(
            { email: user.email, password: user.password },
            "secret_key",
            { expiresIn: 86400 }
          );
          return res.json({
            status:200,
            msg:"Login Successfully", token, id: user._id 
          })
        }
        else {
            return res.json({status:401, message: "Password error" });
        }
      } else {
        return res.json({status:404, message: "User does not exist" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

  const workerresetpswd=((req,res)=>{
    workerschema.findByIdAndUpdate({_id:req.params.id},{ password: req.body.password }
      )
      .exec()
      .then((data) => {
        if (data != null)
          res.json({
            status: 200,
            msg: "Updated successfully",
          });
        else
          res.json({
            status: 500,
            msg: "User Not Found",
          });
      })
      .catch((err) => {
        console.log(err);
        res.json({
          status: 500,
          msg: "Data not Updated",
          Error: err,
        });
      });
  
})

module.exports={
    registerworker,upload,
    workerLogin,verifyToken,
    workerresetpswd


}