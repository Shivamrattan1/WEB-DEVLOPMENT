import express from "express";
const router2=express.Router({mergeParams:true});
import wrapAsync from "../../util/wrapAsync.js";
import ExpressError from "../../util/ExpressError.js";
import { listingSchema,reveiwSchema } from "../../schema.js";
import Review from "../review.js";
import Listing from "../listing.js";
const ValidateReview=(req,res,next)=>{
    let {error}=reveiwSchema.validate(req.body);
    if(error){
      let errmsg=error.details.map((el)=>el.message).join(",");
      throw new ExpressError(400,errmsg);
    }
    else{
      next();
  
        }
          }
router2.post("/",ValidateReview,wrapAsync(async (req,res)=>{
    let {id}=req.params;
    let listing1=await Listing.findById(id);
    console.log(req.params)
    let newReview = new Review(req.body.review);
    listing1.reviews.push(newReview);
    await newReview.save();
    await listing1.save();
    req.flash("success","New Review Created");
    res.redirect(`/listings/${listing1._id}`);
  }))
  router2.delete("/:reviewId",wrapAsync( async(req,res)=>{
    let {id,reviewId}=req.params;
    console.log(id,reviewId);
    let res1=await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}})
    let res2=await Review.findByIdAndDelete(reviewId);
    console.log(res1,res2);
    req.flash("success","Review Deleted");
    res.redirect(`/listings/${id}`)
  }))
  export default router2;