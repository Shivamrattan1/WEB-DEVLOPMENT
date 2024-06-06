import mongoose  from "mongoose";
const chatSchema= new mongoose.Schema({
    from:{
        type:String
    },
    to:{
        type:String
    } ,
    msg:{
        type:String,
        maxLength:50,
    },
    created_at:{
        type:Date
    }
})
const Chat = mongoose.model("Chat",chatSchema);
export default Chat;
