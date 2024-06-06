import mongoose from "mongoose";
const {Schema}=mongoose;
main()
.then((res)=>{
    console.log("connextion successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/tata1');
}
const userSchema=new Schema({
    username : String,
    email:String,
});
const User=mongoose.model("User",userSchema);
const postSchema=new Schema({
    content : String,
    likes:Number,
    user:
        {
            type: Schema.Types.ObjectId,
            ref:"User",
        }
});
const Post=mongoose.model("Post",postSchema);
const addData = async ()=>{
    let user2=new User({
        username:"rahulkumar",
    });
    let post1= new Post({
        content:"abara ka dabara chu chu",
        likes:7
    })
    post1.user=user2;
    await user2.save();
    let res= await post1.save();
    console.log(res);
}
// addData();
let res=await User.find({});
console.log(res);