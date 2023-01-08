const path = require('path')
const {ProvidePlugin} = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode : 'development',
    entry : './src/index.js',
    output : {
        path : path.resolve(__dirname,'./dist'),
        filename : 'bundle.js'
    },
    module: {
        rules : [
            {
                test : /\.css$/,
                use : ['style-loader','css-loader']
            }
        ]
    },
    plugins : [
        new ProvidePlugin({
            $ : 'jquery',
            jQuery : 'jquery'
        }),
    ]
}