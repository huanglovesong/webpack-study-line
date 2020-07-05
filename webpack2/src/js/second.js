// webpack针对引入的代码片段在打包后有数字标识，通过标识进行加载
const greeter = require('./first');
import '../less/common.css'
import '../less/common.less'
import '../less/loadImg.less'
document.querySelector("#root").appendChild(greeter());