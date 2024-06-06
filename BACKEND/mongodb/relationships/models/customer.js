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
const customerSchema=new Schema({
    name : String,
   orders:[
        {
            type: Schema.Types.ObjectId,
            ref:"Order",
        }
    ]
});
const orderSchema=new Schema({
    item : String,
    price:Number,
});
// customerSchema.post("findOneAndDelete", async (customer)=>{
//     console.log("post");
//     if(customer.orders.length){
//        let res = await Order.deleteMany({_id: { $in : customer.orders}});
//        console.log(res);
//     }
// });
const Order=mongoose.model("Order",orderSchema);
const Customer=mongoose.model("Customer",customerSchema);
const addCustomer = async ()=>{
    let cust1=new Customer({
        name :"rahulkumar",

    })
    let order1=await Order.findOne({item:"chips"});
    let order2=await Order.findOne({item:"chocolate"});
    cust1.orders.push(order1);
    cust1.orders.push(order2);
    let res=await cust1.save()
    console.log(res);
}
customerSchema.pre("findOneAndDelete", async ()=>{
    console.log("pre middleware")
});
const findCustomer=async ()=>{
    let res= await  Order.find({});
    console.log(res);
}
findCustomer();
// addCustomer();
// const addOrders=async ()=>{
//     let res=await Order.insertMany([
//         {item:"samosa",price:12},
//         {item:"chips",price:10},
//         {item:"chocolate",price:80},
//     ]);
//     console.log(res);
// }

// addOrders();

const addCust=async ()=>{
 let newCust= new Customer({
    name:"arjun"
 });
 let newOrder=new Order({
    item: "burger",
    price:250
 });
 newCust.orders.push(newOrder);
 await newOrder.save();
 await newCust.save()
}
// addCust();
// const delCust = async ()=>{
//   let data=  await Customer.findByIdAndDelete("66452cece1ad00ed136e40cb");
//   console.log(data);
// }
// delCust();

