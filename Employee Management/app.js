
const express =require ('express');
const {  addEmployee, getAllEmployees, updateEmployeeById, deleteById } = require('./employee');

const app= express();
app.use(express.json());

app.get('/employees',async(req,res)=>{
    try{
        const employees=await getAllEmployees();

    return res.send({
        data: employees
    })
    }catch(err){
        console.error(err);
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

app.patch('/employees/:id',async(req,res)=>{
    try{
        const employee=await updateEmployeeById(req.params.id,req.body);

        return res.send({
            data:employee
        })

    }catch(err){
        console.error(err);
        return res.status(500).send({
            message:"Unexpected error"
        })
        
    }
})

app.delete('/employees/:id',async(req,res)=>{
    try{
        const employee=await deleteById(req.params.id);

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
