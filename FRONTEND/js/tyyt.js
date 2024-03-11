
let arr=[7,20,1,2,6,9,1,0,4,5];
let arr2=arr.reduce((min,el)=>{
    if(el<min)
    {
        return el;
    }
    else{
        return min;                                      
    }
})
let arr3=arr.every((el)=>{return el%10==0})
data={
name:"shivam",age:19,lastname:"rattan"
}
function sum(...args){
    for(i=0;i<args.length;i++)
    {
        console.log(i+1," value is ",args[i]);
    }
    return args.reduce((res,el)=>{return (res+el)});
}
const student={name:"shivam",age:18,class:9,username:"shiva@123",password:"shakal@123"};
let{username:user,password:pass}=student;
console.log(user);