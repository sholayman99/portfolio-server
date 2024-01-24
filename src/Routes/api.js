/*
* Author: Md. Sholayman
* Description: This is the file that contains all the api end-point of the app
* Date : 17 January 2024
* */

const express = require("express");
const router = express.Router();
const ProjectController = require("../Controllers/ProjectController");

//api end-point for projects
router.post("/CreateProject",ProjectController.CreateProject);
router.get("/FindProjects",ProjectController.FindProjects);
router.get("/FindAProject/:id",ProjectController.FindAProject);
router.get("/FindTools" , ProjectController.FindTools);



module.exports=router;