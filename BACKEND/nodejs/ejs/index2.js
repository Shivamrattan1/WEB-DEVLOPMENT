const express = require("express")
const path = require("path")
app=express()
const port=8080
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"/views"));
app.get("/",(req,res)=>{
    res.render("home.ejs")
})
app.listen(port,(req,res)=>{
    console.log(`listening on port`)
})
app.get("/ig/:username",(req,res)=>{
    const instadata=require("./data.json");
    
    let {username}=req.params;
    let data = instadata[username]
    if(data)
    {
    console.log(data)
    res.render("instagram.ejs",{data});
    }
    else
    {
        res.render("error.ejs",);
    }
    
})