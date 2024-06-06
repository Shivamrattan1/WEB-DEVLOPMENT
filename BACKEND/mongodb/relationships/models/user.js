import mongoose from "mongoose";
const {Schema}=mongoose;
main()
.then((res)=>{
    console.log("connextion successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/tata');
}
const userSchema=new Schema({
    username : String,
    addresses:[
        {
            location : String,
            city : String,
        },
    ]
});
const User=mongoose.model("User",userSchema);
const addUsers= async()=>{
    let user1=new User({
        username : "FAEfrerf",
        addresses :  [{location:"hjfvefjernw ",city:"ludhiana"},{location:"jfeijorfenjf ",city:"patiala"}],
    });
    let result=await user1.save();
    console.log(result);
}
addUsers();
