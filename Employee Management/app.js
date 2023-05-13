
const express =require ('express');
const {  addEmployee, getAllEmployees } = require('./employee');

const app= express();
app.use(express.json());

app.get('/employees',async(req,res)=>{
    try{
        const employees=await getAllEmployees();

    return res.send({
        data: employees
    })
    }catch(err){
        console.error(err.message);
        return res.status(500).send({
            message:"Unexpected error"
        })
    }
    

})

app.post('/employees',async(req,res)=>{
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
