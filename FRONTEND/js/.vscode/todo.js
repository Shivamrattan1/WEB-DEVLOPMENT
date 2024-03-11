let but=document.querySelector('button')
let inp=document.querySelector('input')
let ul=document.querySelector('ul')
but.addEventListener("click",function (){
let li=document.createElement('li')
let but2=document.createElement('button')
but2.classList.add("delete")
but2.innerText="delete"
// but2.addEventListener("click",function(){
//     let para=but2.parentElement
//     ul.removeChild(para)
//     })

li.innerText=inp.value
ul.appendChild(li)
li.appendChild(but2)
})
    ul.addEventListener("click",function(event){
    let k=event.target.nodeName
    if(k==="BUTTON")
    {
        let lli=event.target.parentElement
        ul.removeChild(lli)
    }
    })
