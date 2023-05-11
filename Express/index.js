

const express= require('express');

const app = express();

const port = process.argv[2] || 3045

app.get('/',(req,res,next)=>{


    return res.send({
        message:"Hello World!"
    })
})

app.listen(port, ()=> {
    console.log(`app listening on http://localhost:${port}`);

})