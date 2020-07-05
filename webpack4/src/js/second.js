// webpack针对引入的代码片段在打包后有数字标识，通过标识进行加载
const greeter = require('./first');
import '../less/common.css'
import '../less/common.less'
// import '../less/loadImg.less'
setTimeout(() => {
    console.log([1, 2, 3].map(n => n + 1));
}, 1000);


document.querySelector("#root").appendChild(greeter());