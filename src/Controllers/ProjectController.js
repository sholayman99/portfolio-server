/*
* Author: Md. Sholayman
* Description: This is the file that contains all the controllers for the projects.
* Date : 17 January 2024
* */

const ProjectModel = require("../Models/ProjectModel");
const ToolModel = require("../Models/ToolModel")


//create project controller
exports.CreateProject=async (req,res)=>{
    try {
        let reqBody =req.body;
        let data = await ProjectModel.create(reqBody);
        res.status(201).json({status:"created" , data:data})
    }catch (e) {
        res.status(400).json({status:"fail" , data:e.message})
    }

}

//find all project controller
exports.FindProjects=async (req,res)=>{
    try {
        let data = await ProjectModel.find({});
        res.status(200).json({status:"success" , data:data})
    }catch (e) {
        res.status(400).json({status:"fail" , data:e.message})
    }

}

//find a single project by id controller
exports.FindAProject=async (req,res)=>{
    try {
        let id = req.params.id;
        let data = await ProjectModel.findOne({_id:id});
        res.status(200).json({status:"success" , data:data})
    }catch (e) {
        res.status(400).json({status:"fail" , data:e.message})
    }

}

exports.FindTools = async(req,res)=>{
    try {
        let data = await ToolModel.find({})
        res.status(200).json({status:"success" , data:data})
    }catch (e) {
        res.status(400).json({status:"fail" , data:e.message})
    }
}

