const TasksModel = require("../models/TasksModel");

//Create task
exports.createTask=(req,res)=>{
    let reqBody=req.body
    reqBody.email=req.headers['email'];
    TasksModel.create(reqBody,(err,data)=>{
        if(err){
            res.status(200).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}

//delete task
exports.deleteTask=(req,res)=>{
    let id= req.params.id;
    let Query={_id:id};
    TasksModel.remove(Query,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}

//update task
exports.updateTaskStatus=(req,res)=>{
    let id= req.params.id;
    let status= req.params.status;
    let Query={_id:id};
    let reqBody={status:status}
    TasksModel.updateOne(Query,reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}
