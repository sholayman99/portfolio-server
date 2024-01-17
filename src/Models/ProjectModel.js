/*
* Author: Md. Sholayman
* Description: This file contains data table model for all projects
* Date : 17 January 2024
* */

const mongoose = require("mongoose");

const ProjectSchema = mongoose.Schema({
    title:{type:String , require:true},
    cover:{type:String , require:true},
    overview:{type:String , require:true},
    img1:{type:String , require:true},
    img2:{type:String , require:true},
    img3:{type:String , require:true},
    tools:{type:String , require:true},
    gitLink:{type:String , require:true},
    liveLink:{type:String },
},
{timestamps:true,versionKey:false})


const ProjectModel = mongoose.model("projects",ProjectSchema);
module.exports = ProjectModel;