const path = require("path");

const fpath = "/a/b/c/index.html";

// 没有传第二个参数，所以得到的是 文件名加拓展名 index.html
console.log(path.basename(fpath));

// 传第二个参数，.html ,所以得到的是 文件名加拓展名 index.html .html
console.log(path.basename(fpath), ".html");

// 传第二个参数，.js 所以得到的是 文件名加拓展名 index.html
console.log(path.basename(fpath, '.js'));
