const { log } = require('console')
const fs = require('fs')

fs.writeFile('./files/04.txt', "这是新建的文件", err => {
    if (err) return console.log('写入文件失败' + err.message);
    console.log("写入成功")
})