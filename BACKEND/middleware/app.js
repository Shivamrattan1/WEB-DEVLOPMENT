import express from "express";
let app=express();
let port=8080;
import ExpressError from './error/ExpressError.js'
app.listen(port,()=>{
    console.log("server");
});
// app.use((req,res)=>{
//     console.log("hi i am midddleware");
//     res.send("middleware fineshed")
// })
let check=(req,res,next)=>{
    console.log("hello");
    next();
}
// app.get("/wrong",(req,res)=>{
//     abcd=abcd;
// })
app.use("/api",check,(req,res,next)=>{
    let {token}=req.query;
    console.log(req.query,token)
    if(token=="giveaccess")
        {
            return next();
        }
    else
    {
    throw new ExpressError(401,"ACCESS DENIED!")
    }
})
app.get("/err",(req,res)=>{
    abcd=abcd;
})
// app.use((err,req,res,next)=>{
//     console.log(err);
//     next(err);
// })
app.use((err,req,res,next)=>{
    console.log("eror");
    // res.send(err)
    let {status=500,message}=err;
    res.status(status).send(message)
})
// app.use((req,res,next)=>{
//     // console.log(req);
//     req.time=new Date(Date.now())
//     console.log(req.method,req.hostname,req.time);
//     next();
// })
// app.use("random",(req,res,next)=>{
//     console.log("hi i am 1st midddleware");
//     next();
//     console.log("jjk");
// })
// app.get("/random",()=>{
//     console.log("server is here");
// })
// app.get("/api",(req,res)=>{
//     console.log("server is here");
//     res.send("data");
// })
// })
// // app.use((req,res,next)=>{
//     console.log("hi i am 1st midddleware");
//     next();
//     console.log("jjk");
// })

// app.use((req,res,next)=>{
//     console.log("hi i am 2nd midddleware");
//      return next();
//     console.log("jjk");
// })
// app.use((req,res,next)=>{
//     res.send("hey path not found")
// })
