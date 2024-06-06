import express from "express";
const router=express.Router();
import wrapAsync from "../../util/wrapAsync.js";
import ExpressError from "../../util/ExpressError.js";
import { listingSchema,reveiwSchema } from "../../schema.js";
import Listing from "../listing.js";
const ValidateListing=(req,res,next)=>{
    let {error}=listingSchema.validate(req.body);
    if(error){
      let errmsg=error.details.map((el)=>el.message).join(",");
      throw new ExpressError(400,errmsg);
    }
    else{
      next();
    }
  }
  router.get("/new",(req,res)=>{
    res.render("new.ejs");
  })
  router.get("/", wrapAsync(async (req,res)=>{
    const AllListing=await Listing.find({})
   res.render("index.ejs", { AllListing: AllListing });
  }))

  router.get("/:id",wrapAsync(async(req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id).populate("reviews");
    if(!listing)
      {
        req.flash("error","Listing you requested for does not exist!");
        res.redirect("/listings");
      }
    res.render("show.ejs",{listing});
  }));
  router.post("/",ValidateListing,wrapAsync(async (req,res)=>{
    // let{title,discription,image,price,country,location}=req.body;
    
    const listing= new Listing(req.body.listing);
    await listing.save();
    req.flash("success","New Listing Created");
    res.redirect("/listings")
  }))
  router.get("/:id/edit",wrapAsync(async (req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id);
    if(!listing)
      {
        req.flash("error","Listing you requested for does not exist!");
        res.redirect("/listings");
      }
    res.render("edit.ejs",{listing});
  }))
  router.put("/:id",ValidateListing, wrapAsync(async (req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findByIdAndUpdate(id,{...req.body.listing});
    req.flash("success","Listing Updated!");
    res.redirect("/listings")
  }))
  
  router.delete("/:id", wrapAsync(async (req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findByIdAndDelete(id,{new:true});
    req.flash("success","Listing Deleted");
    res.redirect("/listings")
  }))
  export default router;