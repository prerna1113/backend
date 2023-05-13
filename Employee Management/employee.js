const fs = require('fs/promises')

async function getAllEmployees(){
    const data= await fs.readFile('./employe.json',{
        encoding:'utf-8'
    })
    return JSON.parse(data);
}

async function updateEmployee(employees){
    const data = JSON.stringify(employees,null,5)

    await fs.writeFile('./employe.json',data,{
        encoding:'utf-8'
    })

}

async function addEmployee(data){
    const employees = await getAllEmployees()

    var maxId = 0;
    
   for(const employee of employees){
    if(employee.id > maxId){
        
      maxId = employee.id;
        
    }
   }

   const newEmployee = {
    ...data,
    id: maxId + 1 
    
    
   }
   employees.push(newEmployee)

   await updateEmployee(employees);
   
   return newEmployee;

}

module.exports={
    getAllEmployees,
    addEmployee,
}