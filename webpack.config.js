const path = require('path');

module.exports = {
  entry: './frontend/todo_redux.jsx',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  },
  
  module: {
    rules: [
      { 
        test: /\.jsx?$/, 
        exclude: /(node_modules)/, 
        use: {
          loader: 'babel-loader', 
          options: { 
            presets: ['@babel/env', '@babel/react'] 
          }
        },
      }
    ]
  },

  devtool: 'source-map',
  resolve: { //accepts a resolve key, which lets you specify what file extensions to process without explicitly naming them when we import export. You must include the star matcher '*' to be able to include files with an explicit extension.
    extensions: [".js", ".jsx", "*"] 
  }
};