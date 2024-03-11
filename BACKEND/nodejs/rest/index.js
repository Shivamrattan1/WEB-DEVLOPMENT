const express=require("express");
const{v4:idv} =require("uuid");
const path=require("path");
const app=express();
const port=8080;
const methodoverride=require("method-override");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"))
app.use(methodoverride("_method"));
app.use(express.static(path.join(__dirname,"public")))
let posts = [
    {
        id:idv(),
        username :  "apnacollege",
        content : "I Love Coding!"
    }
    ,
    {
        id:idv(),
        username : "sharadha khapra",
        content : "hard is our ass"
    },
    {
        id:idv(),
        username : "apnajhatt",
        content : "jhatuuu"
    }
];
app.use(express.urlencoded({extended:true}));
app.listen(port,()=>{
    console.log("listening to port")
})
app.get('/posts/new',(req,res)=>{
res.render("form.ejs")
});
app.get('/posts/:id',(req,res)=>{
    let{id}=req.params;
    let post=posts.find((p) =>id === p.id);
    console.log(post)
    res.render("show.ejs",{post})
    });
app.get('/posts/:id/edit',(req,res)=>{
        let{id}=req.params;
        let post=posts.find((p) =>id === p.id);
        console.log(post)
        res.render("edit.ejs",{post})
});
app.post("/posts",(req,res)=>{
    console.log(req.body);
    let id=idv();
    let {username,content}=req.body;
    let post={id,username,content};
    console.log(post);
    posts.push(post)
    res.redirect("/posts");
})
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts}); 
})
app.patch("/posts/:id",(req,res)=>{
    console.log("hello");
    let{id}=req.params;
    let ncontent=req.body.content;
    let post=posts.find((p) =>id === p.id);
    post.content=ncontent;
    console.log(id);
    console.log(ncontent);
    console.log(post);
    res.redirect("/posts")
    });
    app.delete("/posts/:id",(req,res)=>{
        console.log("hello");
        let{id}=req.params;
        let post=posts.find((p) =>id === p.id);
        console.log(id);
        console.log(post);
        posts=posts.filter((p) =>id !== p.id)
        res.redirect("/posts")
        });