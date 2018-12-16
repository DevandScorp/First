const path = require('path');


module.exports = {
  entry: './lodash/index.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(`${__dirname}`, 'dist'),
  },
};
