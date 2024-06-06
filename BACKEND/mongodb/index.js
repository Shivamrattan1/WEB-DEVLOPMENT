import express from "express";
import path from "path"
import ExpressError from "./ExpressError.js";
import { fileURLToPath } from 'url';
import mongoose  from "mongoose";
import methodoverride from "method-override";
import Chat from './models/chat.js';
import { connected } from "process";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app=express();
const port=8080;
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"))

app.use(express.static(path.join(__dirname,"public")))
app.use(methodoverride("_method"));
app.use(express.urlencoded({extended:true}));
main()
.then((res)=>{
    console.log("connextion successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}
app.listen(port,()=>{
    console.log("listening to port")
})
app.get("/",(req,res)=>{
    res.send("working root");
})
function asyncWrap(fn){
    return function(req,res,next){
        fn(req,res,next).catch((err)=>next(err));
    }
}
app.get("/chats",async (req,res)=>{
   let chats=  await Chat.find();
   res.render("index.ejs",{chats});
})

app.get("/chats/new",(req,res)=>{
    // throw new ExpressError(404,"page not found")
    res.render("new.ejs")
 })
//  app.use((err,req,res,next)=>{
//     let {status=500,message="some error occured"}=err;
//     res.status(status).send(message);
//  })
 app.get("/chats/:id/edit",asyncWrap(async (req,res,next)=>{
        let {id}=req.params;
    let chat1= await Chat.findById(id);
    if(!chat1)
    {
       next(new ExpressError(404,"chat not found") );
    }
    res.render("edit.ejs",{chat1});
 }))
 app.patch("/chats/:id",async (req,res)=>{
    let {id}=req.params;
    let {msg:newMsg} = req.body;
    console.log(newMsg);
    let updatedChat=  await Chat.findByIdAndUpdate(id,{msg:newMsg},{runValidators:true,new:true})
    console.log(updatedChat);
    console.log("update.chat");
    res.redirect("/chats")
 })
 app.delete("/chats/:id",async (req,res)=>{
    let {id}=req.params;
    await Chat.findByIdAndDelete(id,{runValidators:true,new:true})
    console.log("delete chat");
    res.redirect("/chats")
 });
 app.post("/chats", async(req,res,next)=>{
    try{
    let {from,to,msg}=req.body;
    let newChat=new Chat({
        from:from,
        to:to,
        msg:msg,
        created_at:new Date(),
    });
     await newChat.save()
    res.redirect("/chats");
}
catch(err){
    // console.log(err);
    next(err);
}
 })
 app.use((err,req,res,next)=>{
    console.log(err.name);
    if(err.name==="ValidationError")
        {
           err= handleValidationError(err);
        }
    next();
})
function handleValidationError(err){
    console.log("ValidationError please follow rules for insertion")
    console.dir(err.message);
    return err;
}