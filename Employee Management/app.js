

const express =require ('express');
const fs = require('fs/promises')

async function getAllEmployes(){
    const data= await fs.readFile('./employe.json',{
        encoding:'utf-8'
    })
    return JSON.parse(data);
}



const app= express();

app.get('/employee',(req,res)=>{
    

})


app.listen(3036,()=>{
    console.log("server is listening on port 3036")
})
