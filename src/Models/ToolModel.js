/*
* Author: Md. Sholayman
* Description: This file contains data table model for all tools
* Date : 24 January 2024
* */

const mongoose = require("mongoose");

const ProjectSchema = mongoose.Schema({
        img:{type:String , require:true}
    },
    {timestamps:true,versionKey:false})


const ProjectModel = mongoose.model("tools",ProjectSchema);

module.exports = ProjectModel;