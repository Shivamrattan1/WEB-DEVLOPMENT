import User from "../models/user.js"

const signup=(req,res)=>{
    res.render("signup.ejs");
}
const login=(req,res)=>{
    res.render("login.ejs");
}
const signup2=async(req,res)=>{
    try{
     let {username,email,password}=req.body;
     const newUser= new User({email,username});
     const redUse=await User.register(newUser,password);
     console.log(redUse);
     req.login(redUse,(err)=>{
         if(err)
             {
                 return next(err);
             }
             req.flash("success","you are logged in");
             res.redirect("/listings");
     });
    }
    catch(e){
     req.flash("error","error in login credentials");
    }
 }
const login2=async (req,res)=>{
    req.flash("success","Welcome to wanderlust you are logged in");
    let redUR=res.locals.redURL ;
    if(!redUR)
    {
            redUR="/listings";
    }
    res.redirect(redUR);
}
const logout=(req,res)=>{
    req.logOut((err)=>{
        if(err)
            {
                return next(err);
            }
            req.flash("success","you are logged out");
            res.redirect("/listings");
    })
}
export {signup,signup2,login,login2,logout};
