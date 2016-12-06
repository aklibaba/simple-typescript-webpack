var path = require("path");

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: './app.ts',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'

    },
    resolve: {
        extensions: ['', '.ts', '.js']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript'
            }
        ]
    }
};