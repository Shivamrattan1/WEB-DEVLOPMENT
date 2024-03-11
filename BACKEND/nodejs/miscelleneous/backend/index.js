const express=require("express");
app=express();
port =8080;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get("/register",(req,res)=>{
    let {username,password}=req.query;
    res.send(`standard get response ${username}!`);
})
app.post("/register",(req,res)=>{ 
    console.log(req.body)
    let {username,password}=req.body;
    res.send(`standard post response ${username}!`);
})
app.listen(port,()=>{
    console.log("port is listening")
})