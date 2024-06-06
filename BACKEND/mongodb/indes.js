import mongoose  from "mongoose";
main()
.then((res)=>{
    console.log("connextion successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const users=new mongoose.Schema({
    name:String,
    email:String,
    age:Number
})
const user=mongoose.model("User",users);
const user1=new user(
  {
    name: "shivam",
    email:"sjdij",
    age:98
  }
);
// console.log(user1);
// user1.save()
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err)
// });
// user.insertMany([
//   { name:"adam",email:"dfdgvkfnks",age:19},
//   { name:"bob",email:"dfdgvkfnks",age:19},
//   { name:"jackass",email:"dfdgvkfnks",age:19}
// ]).then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err)
// });
// user.find({}).then((res)=>{
//   console.log(res);
// });
// user.find({age:{$gt:90}}).then((res)=>{
//   console.log(res);
// });
// user.updateOne({name:"shivam"},{age:31}).then((res)=>{
//   console.log(res);
// });
user.findOneAndUpdate({name:"shivam"},{age:38},{new:true}).then((res)=>{
  console.log(res);
});
