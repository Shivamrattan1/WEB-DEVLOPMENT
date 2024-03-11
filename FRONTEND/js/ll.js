arr=[1,2,3,4,5]
let pp=(tt) => {
    for(let i=0;i<tt.length;i++)
    {
        tt[i]=tt[i]*tt[i]
    }
    console.log(tt)
}
pp(arr)
let qq=(tt) => {
    sum=0
    for(let i=0;i<tt.length;i++)
    {
        sum=sum+tt[i]
    }
    console.log(sum)
}
let arr2=["shivam","rattan"];
let arr3=arr2.map((el)=>{return el.toUpperCase()})
function doubleargs(el,...args){
    return args.map((ell,max=0)=>
       {
        max=max+1
        if((max)<=el)
        {
            return ell
        }
        else
        {
            return ell*2
        }
       })
}
function doublearguments(arr,...args){
    return [...arr,...args.map((el)=>el*2)]
}
function mergeobjects(obj1,obj2){
    return {...obj1,...obj2}
}
let shivam={
name:"shivam",age:12
}
let rattan={
lastname:"rattan",phone:"1232"
}
student={
jjk:function (){
setInterval(()=>{console.log(this)},2000);
},
jjk2:function (){
    setInterval(function (){console.log(this)},2000);
}
}
    