const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'sourcemap',
    entry: './src/client/index.js',
    rules: [{
        test: '/\.js$/',
        exclude: /node_modules/,
        loader: "babel-loader"
    }]

}