// import merge from 'webpack-merge';
var merge = require('webpack-merge');
var webpack = require('webpack');
var path = require('path');
var join = path.join;
var resolve = path.resolve;
var commonConfig = require('./webpack.common.config.js');
module.exports = merge.smart(commonConfig, {
    /*  值得注意的就是，webpack-dev-server所使用的bundle.js文件并不是webpack.config.js中output打包生成的bundle.js，
    而是使用webpack-dev-server自己打包生成的，这个文件不存在与output或其他路径中，
    而是存到了内存中，事实上webpack-dev-server所使用的那个bundle.js我们是看不到的！*/
    devServer: {
        open: true, // 开启服务器时，自动打开浏览器
        port: 8081, // 开启的服务器的端口
        publicPath: resolve('', '/'), // devServer中的publicPath是用来本地服务拦截带publicPath开头的请求的
        contentBase: join(__dirname, 'dist'),  // 是指定在哪个路径下或者文件夹下中开启服务器；
    },
    // process.env.NODE_ENV:production、development
    // 环境
    mode: 'development',
    // mode: 'production',
    // 打包源码的类型
    devtool: 'eval-source-map',
    plugins: [
        // HMR大幅提高了开发体验，只更新变更内容，调整样式迅速，避免了大部分的网络请求、浏览器重新渲染
        new webpack.HotModuleReplacementPlugin(),
    ]
});