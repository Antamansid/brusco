const path = require('path');
const webpack = require("webpack");

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'frontend', 'src', 'app.jsx'),
    },
    output: {
        path: path.resolve(__dirname, 'frontend'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery'",
            "window.$": "jquery"
        })
    ]
};