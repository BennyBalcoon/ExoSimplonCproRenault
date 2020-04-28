const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'exemple-00.js'),
    resolve: {
      extensions: [
        '.js'
      ]
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'exemple-00/build')
    },
    devtool: 'inline-source-map'
};