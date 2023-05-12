const fs = require('fs/promises')

async function getAllEmployes(){
    const data= await fs.readFile('./employe.json',{
        encoding:'utf-8'
    })
    return JSON.parse(data);
}

async function updateEmployee(employees){
    const data = JSON.stringify(employees,null,4)
    await fs.writeFile('./employe.json',data,{
        encoding:'utf-8'
    })

}

async function addEmployee(data){
    const employees = getAllEmployes()
    let maxid=-1;
   for(const employee of employees){
    if(employee.id >maxid){
        maxid=employee.id;
    }
   }

   const newEmployee={
    ...data,
    id:maxid+1,
   }
   employees.push(newEmployee);

}

module.exports={
    getAllEmployes,
    addEmployee,
}