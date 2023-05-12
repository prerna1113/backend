

const express =require ('express');

const app= express();

app.get('/employee',(req,res)=>{
    

    return res.send("Hello World!");
})


app.listen(3036,()=>{
    console.log("server is listening on port 3036")
})
