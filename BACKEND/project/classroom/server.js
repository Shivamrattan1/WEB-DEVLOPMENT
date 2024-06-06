// the cookies file
import express from "express";
const router=express.Router();
import path from "path";
const app=express();
const port=8080;
import session from "express-session";
const sessionOption={secret:"mjnkemjfewkjnvefwkm",resave:false,saveUninitialized:true,};
app.use(session(sessionOption));
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
import cookieParser from "cookie-parser";
import flash from "connect-flash";
app.use(cookieParser("secretcode"));
app.listen(port,()=>{
    console.log("listening to port")
})
app.use(flash());
// app.get("/gete",(req,res)=>{
//     res.cookie("greet","Hello");
//     console.log("hhj");
//     res.send("tt");
// })
// app.get("/getes",(req,res)=>{
//     res.cookie("made-in","India",{signed:true});
//     res.send("pp");
// })
// app.get("/res",(req,res)=>{
//     console.log(req.signedCookies);
//     res.send("pp");
// })
// app.get("/re",(req,res)=>{
//     console.log(req.cookies);
//     res.send("tt");
// })

// app.get("/test",(req,res)=>{
//     if(req.session.count)
//     {
//         req.session.count++;
//     }
//     else
//     {
//         req.session.count=1;
//     }
// res.send(`server request count ${req.session.count}`)
// })
// app.get("/",(req,res)=>{
//     res.send("dcwc");
// })
app.use((req,res,next)=>{
    res.locals.msg=req.flash('success');
    res.locals.err=req.flash('error');
    next();
})
app.get("/register",(req,res)=>{
    let{name="user"} =  req.query;
    req.session.name=name;
    if(name=="user")
    {
        req.flash("error","user not  registered succesfully");
    }
    else
    {
        req.flash("success","user register succesfully");
    }
    res.redirect("/hello");
})
app.get("/hello",(req,res)=>{
    // res.locals.msg=req.flash('success');
    // res.locals.err=req.flash('error');
    res.render("page.ejs",{name : req.session.name});
})