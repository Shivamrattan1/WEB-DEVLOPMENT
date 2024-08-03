import Listing from "../models/listing.js";
const new1 = async (req,res)=>{
    res.render("new.ejs");
}
const index=async (req,res)=>{
    const AllListing=await Listing.find({})
   res.render("index.ejs", { AllListing: AllListing });
  }
const show=async(req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id).populate({path: "reviews",populate:{
      path:"author",
    },}).populate("owner");
    if(!listing)
      {
        req.flash("error","Listing you requested for does not exist!");
        res.redirect("/listings");
      }
    res.render("show.ejs",{listing});
  }

  const new2=async (req,res)=>{
    let{title,discription,image,price,country,location}=req.body;
    console.log(req.body);
    let url=req.file.path;
    let filename=req.file.filename;
    const listing= new Listing(req.body.listing);
    listing.owner=req.user._id;
    listing.image={url,filename};
    listing.coordinate.length=req.body.listing.length;
    listing.coordinate.breath=req.body.listing.breath;
    await listing.save();
    req.flash("success","New Listing Created");
    res.redirect("/listings")
  }
  const edit1=async (req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id);
    let orimg=listing.image.url;
    let oriimg=orimg.replace("/upload","/upload/w_250");
    if(!listing)
      {
        req.flash("error","Listing you requested for does not exist!");
        res.redirect("/listings");
      }
    res.render("edit.ejs",{listing,oriimg});
  }
  const edit2 =async (req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findByIdAndUpdate(id,{...req.body.listing});
    if(typeof req.file!=="undefined")
      {
    let url=req.file.path;
    let filename=req.file.filename;
    listing.image={url,filename};
    await listing.save();
      }
    req.flash("success","Listing Updated!");
    res.redirect("/listings")
  }
  const delete1=async (req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findByIdAndDelete(id,{new:true});
    req.flash("success","Listing Deleted");
    res.redirect("/listings")
  }
export {new1,index,show,new2,edit1,edit2,delete1};