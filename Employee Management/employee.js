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

async function updateEmployeeById(data,id){
    const employees = await getAllEmployees()

    let index =-1;
    let i=0;
    for(const employee of employees){

        if(employee.id===id){
            index=i;
            break;

        }
        i++;

    }
    if(index==-1){
        throw new Error("Employee does not exist");
    }
    else{
        const employee = employees[index];

        employee={
            ...employee,
            ...data,
            id:employee.id

        }
        employees[index]=employee;
        await updateEmployee(employees)
        return employee;
    }
}

async function deleteById(id){
    const employees = await getAllEmployees()

    let index =-1;
    let i=0;
    for(const employee of employees){

        if(employee.id===id){
            index=i;
            break;

        }
        i++;

    }
    if(index==-1){
        throw new Error("Employee does not exist");
    }
    else{
      const deletedEmployees= employees.splice(index,1);

       
        await updateEmployee(employees)
        return deletedEmployees[0];
    }

}

module.exports={
    getAllEmployees,
    addEmployee,
    updateEmployeeById,
    deleteById
}