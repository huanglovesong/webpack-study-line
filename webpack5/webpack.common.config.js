
var path = require('path');
var join = path.join;
//引用html-webpack-plugin插件，作用是根据html模板在内存生成html文件，它的工作原理是根据模板文件在内存中生成一个index.html文件。
var htmlwp = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: {
        index: './src/index.js',
        vendor: [
            'react',
            'react-dom',
        ]
    },
    output: {
        path: path.resolve(__dirname, './dist'),  // 注意：__dirname表示webpack.config.js所在目录的绝对路径
        publicPath: process.env.NODE_ENV === 'production' ? './' : '/', // output的publicPath是用来给生成的静态资源路径添加前缀的；
        filename: process.env.NODE_ENV === 'production' ? 'resource/js/[name].[chunkhash].js' : 'resource/js/[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
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
                    {
                        loader: process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
                        options: process.env.NODE_ENV === 'production' ? {
                            // 当前的css所在的文件相对于打包后的根路径dist的相对路径
                            publicPath: '../../'
                        } : {}
                    },
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
                    {
                        loader: process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
                        options: process.env.NODE_ENV === 'production' ? {
                            // 当前的css所在的文件相对于打包后的根路径dist的相对路径
                            publicPath: '../../'
                        } : {}
                    },
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
                            limit: 10000, // size <= 1kib
                            outputPath: "resource/img/"
                        }
                    },
                    // 'image-webpack-loader', // 图片的加载、压缩优化
                ]
            }
        ]
    },
    performance: {
        maxAssetSize: 300000, // 整数类型（以字节为单位）
        maxEntrypointSize: 500000, // 整数类型（以字节为单位）
    },
    resolve: {
        extensions: ['.js']
    },
    plugins: [
        new htmlwp({
            title: '首页',  //生成的页面标题<head><title>首页</title></head>
            filename: 'index.html', //webpack-dev-server在内存中生成的文件名称，自动将build注入到这个页面底部，才能实现自动刷新功能
            template: './publich/index.html' //根据vue_02.html这个模板来生成(这个文件请程序员自己生成)
        }),
        new MiniCssExtractPlugin({
            filename: 'resource/css/[name].css',
            chunkFilename: 'resource/css/[id].css',
            publicPath: '../../',
        }),

    ]
}