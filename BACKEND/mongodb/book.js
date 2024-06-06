import mongoose  from "mongoose";
main()
.then((res)=>{
    console.log("connextion successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const bookSchema=new mongoose.Schema({
   title:{
    type:String,
    required:true,
   },
   author:{
    type:String,
    maxLength:30,
   },
   price:{
    type:Number,
    min:[34,"too low"],
   },
   category:{
    type:String,
    enum:["fiction","nonfiction"],
   }
})

const book1=mongoose.model("books",bookSchema);
book1.findOneAndUpdate({ title : " Big Jackass"},{price:12},{new:true,runValidators:true})
.then((res)=>{
  console.log(res);
})
.catch((err)=>{
  console.log(err.errors.price.properties.message);
});
   