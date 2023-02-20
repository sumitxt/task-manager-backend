const express =require('express');
const UsersController=require("../controllers/usersController");
const TasksController=require("../controllers/tasksController");
const AuthVerifyMiddleware=require("../middleware/AuthVerifyMiddleware");


const router =express.Router();

//login registration update
router.post("/registration",UsersController.registration);
router.post("/login",UsersController.login);
router.post("/profileUpdate",AuthVerifyMiddleware,UsersController.profileUpdate);

//task management
router.post("/createTask",AuthVerifyMiddleware,TasksController.createTask);
router.get("/updateTaskStatus/:id/:status",AuthVerifyMiddleware,TasksController.updateTaskStatus);
router.get("/deleteTask/:id",AuthVerifyMiddleware,TasksController.deleteTask);


module.exports=router;