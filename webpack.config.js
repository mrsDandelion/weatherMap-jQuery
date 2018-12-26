const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: ["babel-polyfill", "./src"],
    output: {
        filename: "./app.bundle.js"
    },
    module:{        
        rules:[
            {
                test: /\.js$/,
                exclude:/node_modules/,
                use: {
                    loader:"babel-loader"
                }
            },
            { test: /\.css$/, use: ["style-loader","css-loader"] },
            {
                test: /\.html$/,
                use: [
                    {
                        loader:"html-loader"
                    }
                ]
            }            
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ],
    devServer: {
        historyApiFallback: true
      }
};