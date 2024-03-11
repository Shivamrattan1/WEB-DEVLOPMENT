let games=[]
let users=[]
let btns=["yellow","red","green","purple"]
let buts=document.querySelectorAll('.btn')
let level=0
let start=false
let h2=document.querySelector('h2')
let cc=-1
document.addEventListener("keypress",function(){
    if(start==false)
    {
    console.log("GAME STARTED")
    start=true 
    levelUp()
    }
})
function levelUp(){
    users=[]
    cc=-1
    console.log(cc)
    level++
    h2.innerText=`level ${level}`
    c=Math.floor(Math.random() *  3)
    let rcolor=btns[c]
    games.push(rcolor)
    let rbutton=document.querySelector(`.${games[0]}`)
    console.log(rbutton)
    let pp =topgbuttonflash(rbutton,250)
    for(let top=1;top<games.length;top++)
    {
        if(games[top-1]!=games[top])
        {
        let rbutton=document.querySelector(`.${games[top]}`)
        pp=pp.then( ()=>{
                return topgbuttonflash(rbutton,250)
                }
            )
        }
        else
        {
            let rbutton=document.querySelector(`.${games[top]}`)
            pp=pp.then(()=>{
                    return topgbuttonflash2(rbutton,250)
            })
            pp=pp.then(()=>{
                return topgbuttonflash3(rbutton,250)
        })
        }
    }
    console.log(games,"games")
    console.log(cc)
}

function checkAns(idx){
        console.log(idx,games.length)
        if(users[idx] == games[idx])
        {
            console.log("if 1 clear")
            if(idx===games.length-1)
            {
                console.log("if 2 clear")
                setTimeout(levelUp,500)
            }
        }
        else{
            h2.innerText=`Game Over ! your level was ${level} Press Any Key To Start.`
            games=[]
            users=[]
            c=-1
            level=0
            document.querySelector('body').style.backgroundColor="red"
            setTimeout(function(){
                document.querySelector('body').style.backgroundColor="white"
            },150)
            start=false
        }
    }
for(b of buts)
{
    b.addEventListener("click",function()
    {
        userflash(this)
        let bts=this
        k=bts.getAttribute('id')
        users.push(k)
        cc=cc+1
        console.log(cc)
        console.log(users,"users")
        checkAns(cc)
    })
}
function buttonflash(button){
    button.classList.add('flash')
    setTimeout(() => {
        button.classList.remove('flash')
    },250);
}
function topgbuttonflash(button,delay){
    return new Promise((resolve,reject)=>{
        button.classList.add('flash')
        setTimeout(() => {
        button.classList.remove('flash')
        resolve();
    },delay);
    })
}
function topgbuttonflash2(button,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        button.classList.add('flash')
        resolve();
    },delay);
    })
}
function topgbuttonflash3(button,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        button.classList.remove('flash')
        resolve();
    },delay);
    })
}
function userflash(button){
    button.classList.add('userflash')
    setTimeout(() => {
        button.classList.remove('userflash')
    },250);
}

