const path = require('path');

module.exports = {
    entry: ['core-js/es/array/from', path.resolve(__dirname, 'src/index.js')],
    output: {
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd',
        library: 'matericons',
        globalObject: "typeof self !== 'undefined' ? self : this", // Prevents webpack from referencing `window` in the UMD build
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
};
