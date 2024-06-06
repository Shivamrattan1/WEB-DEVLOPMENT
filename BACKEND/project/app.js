import express from "express";
import methodoverride from "method-override";
import { fileURLToPath } from 'url';
import session from "express-session";
import path from "path";
import mongoose  from "mongoose";
import ejsMate from 'ejs-mate';
import ExpressError from "./util/ExpressError.js";
import router from "./models/routes/listing.js";
import router2 from "./models/routes/review.js";
import flash from "connect-flash";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app=express();
app.use(express.static(path.join(__dirname,"public")))
app.use(methodoverride("_method"));
app.use(express.urlencoded({extended:true}));
const port=8080;
app.engine('ejs',ejsMate);
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
const sessionOptions={
  secret:"mysupersecret",
  resave:false,
  saveUninitialized:true,
  cookie:{
    expires:Date.now() + 7*24*60*60*1000,
    age: 7*24*60*60*1000,
    httpOnly: true,
  },
}
main()
.then((res)=>{
    console.log("connextion successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}
app.listen(port,()=>{
    console.log("listening to port")
})
app.use(session(sessionOptions));
app.use(flash());
app.use((req,res,next)=>{
  res.locals.success=req.flash("success");
  res.locals.error=req.flash("error");
  next();
})
    app.use("/listings",router);
    app.use("/listings/:id/reviews",router2);

app.all("*",(req,res,next)=>{
 next(new ExpressError(404,"Page not Found"));
});
app.use((err,req,res,next)=>{
  let{status=500,message="Something went Wrong"}=err;
  res.status(status);
  console.log(err);
  res.render("Error.ejs",{message});
  // res.status(status).send(message);
})
 