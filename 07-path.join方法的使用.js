const path = require("path");
const fs = require("fs");

const pathStr = path.join('/a', '/b/c', '../../', './d', 'e')


const pathStr2 = path.join(__dirname, './files/1.txt')


fs.readFile(path.join(__dirname + '/day1/1.txt'), "utf-8", (err, res) => {
    if (err) return console.log("读取失败" + err);

    console.log(res);

})


