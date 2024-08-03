import express from "express";
const router=express.Router();
import wrapAsync from "../../util/wrapAsync.js";
import ExpressError from "../../util/ExpressError.js";
import { listingSchema,reveiwSchema } from "../../schema.js";
import Listing from "../listing.js";
import {isLoggedIn} from "../../middleware.js";
import { isOwner } from "../../middleware.js";
import { new1,index,show,new2,edit1,edit2,delete1 } from "../../controller/listing.js";
import multer from "multer";
import { storage} from "../../cloud.js";
const upload=multer({storage});
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
  router.route("/")
    .get( wrapAsync(index))
    // .post(ValidateListing,wrapAsync(new2));
    .post(isLoggedIn,upload.single('listing[image]'),wrapAsync(new2))
  router.get("/new",isLoggedIn,new1);
  router.get("/:id",wrapAsync(show));
  router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(edit1))
  router.put("/:id",upload.single('listing[image]'),isLoggedIn,isOwner,ValidateListing, wrapAsync(edit2))
  
  router.delete("/:id",isLoggedIn,isOwner, wrapAsync(delete1))
  export default router;
