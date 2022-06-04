// 引入fs模块
const fs = require('fs')

// 读取文件
fs.readFile('./files/11.txt', 'utf-8', (err, res) => {
    // 如果读取失败
    // if (err) {
    //     console.log("读取失败" + err.message);
    //     return;
    // }
    if (err) return console.log("读取失败" + err.message);
    // 读取成功
    console.log("读取成功" + res);
})