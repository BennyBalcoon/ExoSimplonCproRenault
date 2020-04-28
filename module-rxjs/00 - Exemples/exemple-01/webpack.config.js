const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'exemple-01.js'),
    resolve: {
      extensions: [
        '.js'
      ]
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'exemple-01/build')
    },
    devServer: {
      port: 9000
    },
    devtool: 'inline-source-map'
};