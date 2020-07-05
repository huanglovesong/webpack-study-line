
var merge = require('webpack-merge');
var path = require('path');
var join = path.join;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var commonConfig = require('./webpack.common.config.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge.smart(commonConfig, {
    mode: 'production',
    // 打包源码的类型
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin(),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: chunk => (
                        chunk.resource &&
                        /\.js$/.test(chunk.resource) &&
                        /node_modules/.test(chunk.resource)
                    ),
                    chunks: 'initial',
                    name: 'vendors',
                },
                'async-vendors': {
                    test: /[\\/]node_modules[\\/]/,
                    minChunks: 2,
                    chunks: 'async',
                    name: 'async-vendors'
                }
            }
        },
        runtimeChunk: {
            name: 'manifest'
        },
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    ecma: 5,
                    output: {
                        beautify: false,
                    },
                    compress: {
                        drop_console: true,
                    }
                }
            }),
            new OptimizeCSSAssetsPlugin({
                cssProcessorOptions: {
                    discardComments: {
                        removeAll: true
                    },
                    // 避免 cssnano 重新计算 z-index
                    safe: true
                }
            }),
        ],
    }
})