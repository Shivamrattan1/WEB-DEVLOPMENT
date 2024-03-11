const express=require("express");
const app=express();
let port=8080;
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
});
// app.use((req,res)  =>{
//     console.log("reques recieved")
//     let code="<h1>fruits</h1> <ul> <li>apple</li> <li> orange </li> </ul>"
//     res.send(code);
//     // res.send("this is me motherfucker")
//     // res.send({
//     //     name:"apple",
//     //     color:"red"});
// }
// )
// app.get("/",(req,res)=>{

//     res.send("you contacted iojtvgisr");
// })
// app.get("/anshuman",(req,res)=>{
//     res.send("you contacted anshuman");
// })
// app.get("/ritika",(req,res)=>{
//     res.send("you contacted ritika");
// })
// app.get("*",(req,res)=>{
//     res.send("you contacted shivam");
// })
// app.get("/:username/:id",(req,res)=>{
//     console.log(req.params)
//     let {username,id}=req.params
//     let html=`<h1>welcome user ${username} </h1>`
//     res.send(html)
// })
app.get("/search",(req,res)=>{
    console.log(req.query)
    let {q}=req.query
    let html=`<h1>welcome user ${q} </h1>`
    res.send(html)
})