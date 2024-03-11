function colorchange(color,delay){
let num=Math.floor(Math.random()*3)+1
console.log(num)
return new Promise((resolve,reject)=>{
if(num>2)
{
setTimeout(()=>{
    let h1=document.querySelector("h1");
    h1.style.color=color
    resolve();
    },delay)
}
else{
reject();
}
})
}
async function color(){
    try{
    await colorchange("red",1000);
    await colorchange("blue",1000);
    await colorchange("orange",1000);
        colorchange("green",1000);
    }
    catch(err){
        console.log(er);
    }
    let num=Math.floor(Math.random()*3)+1
    console.log(num)
}
color()
