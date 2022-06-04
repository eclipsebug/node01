// 1.读取素材下的 index.html 文件
// 2.处理拿到数据
// 2.1 处理style里面的css，处理完毕后写入
// 2.2 处理script里面的js，处理完毕后写入
// 2.3 处理html文件，引入css和js
const fs = require('fs')
const path = require('path')
//  \w匹配字符 \W匹配非字符
const regCSS = /<style>[\w\W]*<\/style>/
const regJS = /<script>[\w\W]*<\/script>/

fs.readFile(
    path.join(__dirname, '../素材/index.html'),
    'utf-8',
    (err, res) => {
        if (err) return console.log('读取html文件失败' + err.message);
        // console.log(res);
        resolveCSS(res)
        resolveJS(res)
        resolveHTML(res)
    }
)

function resolveCSS(htmlStr) {

    //exec() 返回的是一个数组，第一个元素是我们要提取的内容
    const r1 = regCSS.exec(htmlStr)
    // console.log(r1);
    // 去除开头和结尾的标签
    const newCSS = r1[0].replace('<style>', ' ').replace('</style>', ' ')
    // console.log(newCSS);
    fs.writeFile(path.join(__dirname, './clock/index.css'), newCSS, err => {
        if (err) return console.log('写入失败' + err);
        console.log('写入成功');
    })
}

function resolveJS(htmlStr) {
    const r1 = regJS.exec(htmlStr)
    const newJS = r1[0].replace("<script>", '').replace("</script>", '')
    fs.writeFile(path.join(__dirname, './clock/index.js'), newJS, res => {
        if (res) return console.log("写入失败" + res.message);
        console.log('写入成功');
    })

}

function resolveHTML(htmlStr) {
    const newHTML = htmlStr
        .replace(regCSS, '<link rel="StyleSheet" href="./index.css">')
        .replace(regJS, '<script src="./index.js"></script>')
    fs.writeFile(path.join(__dirname, "./clock/index.html"), newHTML, err => {
        if (err) return console.log("写入html失败" + err.message);
        console.log('写入html成功');
    })
}