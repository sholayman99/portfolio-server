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
    shortDes:{type:String , require:true},
    img1:{type:String,  default:"https://img.freepik.com/free-photo/homepage-seen-computer-screen_23-2149416723.jpg" },
    img2:{type:String , default:"https://img.freepik.com/free-photo/homepage-seen-computer-screen_23-2149416723.jpg"},
    img3:{type:String , default:"https://img.freepik.com/free-photo/homepage-seen-computer-screen_23-2149416723.jpg"},
    img4:{type:String , default:"https://img.freepik.com/free-photo/homepage-seen-computer-screen_23-2149416723.jpg"},
    img5:{type:String , default:"https://img.freepik.com/free-photo/homepage-seen-computer-screen_23-2149416723.jpg"},
    img6:{type:String , default:"https://img.freepik.com/free-photo/homepage-seen-computer-screen_23-2149416723.jpg"},
    tools:{type:String , require:true},
    gitLink:{type:String , require:true},
    liveLink:{type:String , },
},
{timestamps:true,versionKey:false})


const ProjectModel = mongoose.model("projects",ProjectSchema);
module.exports = ProjectModel;