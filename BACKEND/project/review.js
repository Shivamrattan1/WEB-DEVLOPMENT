import Review from "../models/review.js";
import Listing from "../models/listing.js";
const create1=async (req,res)=>{
    let {id}=req.params;
    let listing1=await Listing.findById(id);
    let newReview = new Review(req.body.review);
    newReview.author=req.user._id;
    console.log(newReview);
    listing1.reviews.push(newReview);
    await newReview.save();
    await listing1.save();
    req.flash("success","New Review Created");
    res.redirect(`/listings/${listing1._id}`);
  };
const delete1=async(req,res)=>{
    let {id,reviewId}=req.params;
    console.log(id,reviewId);
    let res1=await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}})
    let res2=await Review.findByIdAndDelete(reviewId);
    console.log(res1,res2);
    req.flash("success","Review Deleted");
    res.redirect(`/listings/${id}`)
  }
export {create1,delete1};