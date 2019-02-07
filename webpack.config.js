const path = require('path')

module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.js'],
    },
}
