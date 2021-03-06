const db=require('../makedatabase').Student
const batchstudent=require('../makedatabase').batchStudent
const route=require('express').Router()

    route.route("/").get((req,res)=>{
        
        db.findAll({}).then(result=>res.json(result))
   .catch(errror=>{
res.status(412).json({msg:error.message});
        });
    })
    .post((req,res)=>{

 db.create(req.body).then(result=>res.json(result))
.catch(error=>{
    res.status(412).json({msg:error.message});
})
    });
   
route.route("/:id").get((req,res)=>{
    
    db.findOne({where:{ studentid :req.params.id}}).
    then(result=>{
        if(result){
            res.json(result);
        }
        else{
            res.sendStatus(404);
        }
        }
    )
    .catch(error=>{
        res.status(412).json({msg:error.message})
    })
})
.put((req,res)=>{

    
    db.update(req.body,{where :{studentid: req.params.id}})
    .then(result=>{db.findOne({where:{studentid:req.params.id}}).then(ress=>{res.send(ress);console.log(ress)})})
    .catch(error=>res.sendStatus(412).json({msg:error.message}));

})
.delete((req,res)=>{
db
.destroy({where:{studentid:req.params.id}})
.then(result => res.sendStatus(204))
.catch(error =>{
    res.status(412).json({msg:error.message});
});
});
route.route("/:studentid/batches").get((req, res) => {
    batchstudent.findAll({ where: { studentStudentid: req.params.studentid } }).
        then(result => {
            if (result) {
                res.json(result);
            }
            else {
                res.sendStatus(404);
            }
        }
        )
        .catch(error => {
            res.status(412).json({ msg: error.message })
        })
})
    

module.exports=route;