let bot=document.querySelector('button')
let h3=document.querySelector('h3')
let div=document.querySelector('div')
bot.addEventListener('click',function (){
    a=Math.floor(Math.random()*255)
    b=Math.floor(Math.random()*255)
    c=Math.floor(Math.random()*255)
    div.style.backgroundColor=`rgb(${a},${b},${c})`
    h3.innerText=`rgb(${a},${b},${c})`
})