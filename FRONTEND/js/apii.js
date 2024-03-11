let url="https://catfact.ninja/fact";
fetch(url)
.then((response)=>{
return response.json()
})
.then((res)=>{
console.log("data 1=",res.fact)
return  fetch(url)
})
.then((response)=>{
    return response.json()
})
.then((res)=>{
    console.log("data 2=",res.fact)
    return  fetch(url)
})
.catch((err)=>{
    console.log(err)
})