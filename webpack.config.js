const path = require('path');
let BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'frontend', 'src', 'page', 'app.jsx'),
    },
    output: {
        path: path.resolve(__dirname, 'frontend'),
        filename: 'bundle.js',
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
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: {
                baseDir: [path.resolve(__dirname, 'frontend')]
            }
        }),

    ]
};