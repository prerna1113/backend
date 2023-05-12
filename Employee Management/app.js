
const express =require ('express');
const { getAllEmployes, addEmployee } = require('./employee');

const app= express();

app.get('/employee',async(req,res)=>{
    const employee=await getAllEmployes();

    return res.send({
        data: employee
    })
    

})

app.post('./employee',async(req,res)=>{
    try{
        const employee=await addEmployee(req.body);

        return res.send({
            data:employee
        })

    }catch(err){
        console.error(err.message);
        return res.status(500).send({
            message:"Unexpected error"
        })
        
    }
})


app.listen(3036,()=>{
    console.log("server is listening on port 3036")
})
