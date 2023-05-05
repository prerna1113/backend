

const fs = require('fs');

function countChar (){
    const data = fs.readFileSync(fileName);

    return data.length
}

let fileName =process.argv[2];
console.log(fileName,countChar(fileName));
