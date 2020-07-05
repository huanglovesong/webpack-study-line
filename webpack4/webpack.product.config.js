
var merge = require('webpack-merge');
var path = require('path');
var join = path.join;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var commonConfig = require('./webpack.common.config.js');
module.exports = merge.smart(commonConfig, {
    mode: 'production',
    // 打包源码的类型
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin(),
    ]
})