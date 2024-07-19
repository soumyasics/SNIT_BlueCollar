const empjobreqschema =require('./JobRequestSchema.js')

const empjobrequest =async (req,res)=>{
    let datas =await empjobreqschema.findOne({jobid:req.params.id,workerId:req.body.workerId})

    if (datas){
        return res.json({
            status:400,
            msg:'You have already applied for this job'
        });

    }
    const work =new empjobreqschema({
        jobid:req.params.id,
        workerId:req.body.workerId

    });
    await work
    .save()
    .then((data)=>{
        res.json({
            status:200,
            msg:'Inserted Successfully',
            data:data,
        })
    })
    .catch((err)=>{
        res.json({
            status:500,
            err:err
        })
    })
}


module.exports={
    empjobrequest
}