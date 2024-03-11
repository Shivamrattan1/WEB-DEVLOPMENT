let url="http://universities.hipolabs.com/search?name=";
let btn =document.querySelector('button');
let input=document.querySelector('input');
let ul=document.querySelector('ul');
btn.addEventListener("click",async ()=>{
    console.log("button was clicked");
    ul.innerText=""
    let country=input.value
    let res=await getColleges(country)
    for( k of res)
    {
        let s=""
        s=s  +  k.country + "     " + k.name
        let p=document.createElement('li')
        p.innerText=s
        ul.appendChild(p)
    }
})
async function getColleges(country){
    try{
        let res= await axios.get(url+country)
        return res.data;
    }   
    catch(e){
        console.log(e);
    }
}