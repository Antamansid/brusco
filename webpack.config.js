const path = require('path');
let BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'frontend', 'src', 'app.jsx'),
    },
    output: {
        path: path.resolve(__dirname, 'frontend'),
        filename: 'bundle.js',
        sourceMapFilename: "bundle.js.map"
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: ["source-map-loader"],
              enforce: "pre"
            },
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

    ],
    resolve: {
        alias: {
            'jquery-ui': 'jquery-ui-dist/jquery-ui.js'
        }
    }
};