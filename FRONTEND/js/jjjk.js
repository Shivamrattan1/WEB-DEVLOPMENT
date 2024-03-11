function compare(arr,n){
let l=arr.length;
let x=[];
let i=0;
while(i<l){
if(arr[i]>n){
x.push(arr[i]);
}
i=i+1;
}
return x;
}
function stru(str){
let x="";
for(let i=0;i<str.length;i++){
let c=str[i];
if(x.indexOf(c)==-1)
{
    x += c;
}
}
return x;
}
function longstr(arr){
let max=0;
let y="";
for(let i=0;i<arr.length;i++)
{
    x=arr[i]
    if(x.length>max)
    {
        max=x.length;
        y=x;
    }
}
return y;
}
function countv(strr){
let cc=0;
let p="";
let y="aeiou";
for(let i=0;i<strr.length;i++)
{
    let c=strr[i];
    if(y.indexOf(c)!=-1)
    {
        cc+=1;
        p+=c
    }
}
console.log(p);
return cc;
}
function random(start,end){
let x = end-start;
y = start + Math.floor(Math.random()*x);
return y;
}