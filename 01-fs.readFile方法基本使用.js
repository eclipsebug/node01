
const fs = require('fs')

fs.readFile('./files/1.txt', 'utf-8', (err, res) => {
    console.log(err);
    console.log("---------------");
    console.log(res);
})