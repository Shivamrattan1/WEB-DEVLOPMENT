const express = require("express")
const path = require("path")
app=express()
const port=8080
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"/views"));
app.get("/",(req,res)=>{
    res.render("home.ejs")
})
// app.get("/help",(req,res)=>{
//     res.render("home.ejs")
// })
// // app.get("/rolldice",(req,res)=>{
// //     res.render("rolldice.ejs");
// // })
app.get("/rolldice",(req,res)=>{
    let diceval=Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs",{num : diceval});
})
app.listen(port,(req,res)=>{
    console.log(`listening on port`)
})
app.get("/ig/:username",(req,res)=>{
    const folowers=["adams ", "mia" , "kriss" ,"jaad"];
    let {username}=req.params;
    res.render("instagram.ejs",{username,folowers});
})