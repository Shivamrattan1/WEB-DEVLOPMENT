h1=document.querySelector('h1')
function changecolor(color,delay,nextcolorchange)
{
setTimeout( ()=>{
h1.style.color=color;
if(nextcolorchange) nextcolorchange();
},1000)
}
changecolor("red",1000,()=>{
    changecolor("orange",1000,()=>{
        changecolor("yellow",1000,()=>{
            changecolor("blue",1000,()=>{
            })
        })
    })
})