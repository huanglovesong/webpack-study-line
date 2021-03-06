var webpack = require('webpack');
var path = require('path');
var join = path.join;
//引用html-webpack-plugin插件，作用是根据html模板在内存生成html文件，它的工作原理是根据模板文件在内存中生成一个index.html文件。
var htmlwp = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    /*  值得注意的就是，webpack-dev-server所使用的bundle.js文件并不是webpack.config.js中output打包生成的bundle.js，
    而是使用webpack-dev-server自己打包生成的，这个文件不存在与output或其他路径中，
    而是存到了内存中，事实上webpack-dev-server所使用的那个bundle.js我们是看不到的！*/
    devServer: {
        contentBase: './dist',  // 是指定在哪个路径下或者文件夹下中开启服务器；
        open: true, // 开启服务器时，自动打开浏览器
        port: 8081 // 开启的服务器的端口
    },
    entry: './src/js/second.js',  //指定打包的入口文件
    output: {
        path: __dirname + '/dist',  // 注意：__dirname表示webpack.config.js所在目录的绝对路径
        filename: 'build.js'        //输出文件
    },
    // 环境
    mode: 'development',
    // mode: 'production',
    module: {
        rules: [
            {
                test: /\.js?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        extends: join(__dirname, '.babelrc'),
                        cacheDirectory: true,
                    },
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                exclude: '/node_modules/',
                use: [
                    (() => { return true ? MiniCssExtractPlugin.loader : 'style-loader'; })(),
                    // {
                    //     loader: 'style-loader'
                    // },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: (loader) => [
                                require('postcss-import')({ root: loader.resourcePath }),
                                require('postcss-cssnext')(),
                                require('autoprefixer')(),
                                require('cssnano')()
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                exclude: '/node_modules/',
                use: [
                    (() => { return true ? MiniCssExtractPlugin.loader : 'style-loader'; })(),
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: (loader) => [
                                require('postcss-import')({ root: loader.resourcePath }),
                                require('postcss-cssnext')(),
                                require('autoprefixer')(),
                                require('cssnano')()
                            ]
                        },
                    },
                    {
                        loader: 'less-loader',  // 
                        options: {
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|jpeg|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            name: "[name].[hash:5].[ext]",
                            limit: 1024, // size <= 1kib
                            outputPath: "img"
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    },
    // 打包源码的类型
    devtool: 'eval-source-map',
    plugins: [
        new htmlwp({
            title: '首页',  //生成的页面标题<head><title>首页</title></head>
            filename: 'index.html', //webpack-dev-server在内存中生成的文件名称，自动将build注入到这个页面底部，才能实现自动刷新功能
            template: './publich/index.html' //根据vue_02.html这个模板来生成(这个文件请程序员自己生成)
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        // HMR大幅提高了开发体验，只更新变更内容，调整样式迅速，避免了大部分的网络请求、浏览器重新渲染
        new webpack.HotModuleReplacementPlugin(),
    ]
}