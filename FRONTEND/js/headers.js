const url="https://icanhazdadjoke.com";
async function getjokes(){
    try{
        const config ={heeaders:{accept:"application/json"}}
        let res= await axios.get(url);
        console.log(res.data);
        }
    catch(err){
        console.log(err);
    }
}