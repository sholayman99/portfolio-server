/*
* Author: Md. Sholayman
* Description: This is the file where the app is running.
* Date : 17 January 2024
* */

const app = require("./app");

app.listen(`${process.env.RUNNING_PORT}`,()=>{
    console.log(`App is running on PORT ${process.env.RUNNING_PORT}`)
})

module.exports = app;