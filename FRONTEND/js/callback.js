function savetodb(){
    return new Promise((resolve,reject)=>{
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
            resolve("speed ok");
        }
        else
        {
            reject("speed bad");
        }
    });
}
savetodb("hello")
.then((result)=>{
    console.log("promise was resolved",result);
    return savetodb("shivam")
})
.then((result)=>{
    console.log("promise was resolved",result);
})
.catch( (error)=>{
    console.log("promise was rejected",error);
})