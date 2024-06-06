import mongoose  from "mongoose";
const Schema=mongoose.Schema;
import Review from "./review.js";
const listingSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    image:{
        type:String,
        default:"https://plus.unsplash.com/premium_photo-1710800032613-6e528143e119?q=80&w=1022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        set : (v)=>v==""?"https://plus.unsplash.com/premium_photo-1710800032613-6e528143e119?q=80&w=1022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D":v,
    },
    price:Number,
    location:String,
    country:String,
    reviews:[
        {
            type: Schema.Types.ObjectId,
            ref:"Review",
        }
    ]
});
listingSchema.post("findOneAndDelete",async (listing)=>{
    if(listing){
        let res=await Review.deleteMany( {_id: {$in: listing.reviews}})
    }
});
const listing = mongoose.model("listing",listingSchema);
export default listing;