const { log } = require('console')
const fs = require('fs')

fs.writeFile("./files/2.txt", "好好学习，天天向上", "utf-8", err => {
    if (err) return console.log("写入文件失败：" + err.message);

    console.log('写入文件成功');
})