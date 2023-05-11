

const express= require('express');
const fs= require('fs/promises')

const app = express();

const port = process.argv[2] || 3045

app.get('/',(req,res,next)=>{


    return res.send({
        message:"Hello World!"
    })
})

app.get('/file/index.html',async(req,res)=>{

    const data= await fs.readFile('index.html');
    
    res.send(data.toString());



})

app.listen(port, ()=> {
    console.log(`app listening on http://localhost:${port}`);

})