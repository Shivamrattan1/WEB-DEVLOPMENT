let url2="https://dog.ceo/api/breeds/image/random";
let btn=document.querySelector("button");
btn.addEventListener("click",async ()=>{
let kk= await getimage();
let img=document.querySelector("img");
img.src=kk;
});
async function getimage() {
    try{
        let res=await axios.get(url2);
        return res.data.message
    }   
    catch(e){
        console.log("error",e);
        return "no fact found";
    }
}