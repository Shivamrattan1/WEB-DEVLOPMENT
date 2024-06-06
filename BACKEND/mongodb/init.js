import mongoose  from "mongoose";
import Chat from './models/chat.js';
main()
.then((res)=>{
    console.log("connextion successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}
Chat.insertMany([
    {
        from:"hemak",
        to:"priya",
        msg:"efgrqefwtf",
        created_at: new Date()
    },
    {
        from:"jieo",
        to:"rakesh",
        msg:"efgrqefwfiooeijo",
        created_at: new Date()
    },
    {
        from:"hjaka",
        to:"jhatuu",
        msg:"efgrrgvbgrtf",
        created_at: new Date()
    },
    {
        from:"jhatu",
        to:"priyanshi",
        msg:"effewegvbgrtf",
        created_at: new Date()
    }
]);

