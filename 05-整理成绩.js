const fl = require('fs')

// 读取文件
fl.readFile('./files/成绩.txt', 'utf-8', (err, res) => {
    if (err) return console.log("读取失败：" + err.message);

    // console.log(res);
    let arr = res.split(' ') //以空格分隔数组

    let newArr = []
    arr.forEach(item => {
        newArr.push(item.replace('=', ':'))  //将原来的数组里面的=替换成：然后放入到新的数组
    })
    let str = newArr.join('\r\n')   //将newArr转化成 字符串

    // 写入新文件中
    fl.writeFile('./files/ok成绩.txt', str, err => {
        if (err) return console.log('写入失败：' + err.message);

        console.log('写入成功');
    })
})