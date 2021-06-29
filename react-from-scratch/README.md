```

1. mkdir [react-project-folder]
   cd [react-project-folder]

2. npm init -y
   git init

3. edit .gitignore

   node_modules
   build
   
4. npm i react react-dom
   npm i @babel/core @babel/preset-env @babel/preset-react --save-dev
   npm i webpack webpack-cli webpack-dev-server babel-loader css-loader style-loader html-webpack-plugin --save-dev
   
5. package.json, add:

   "scripts": {
     "start": "webpack serve --mode=development --open --hot",
     "build": "webpack --mode=production"
   },
   
6. .babelrc   
   
   {
     "presets": [
       "@babel/preset-env",
       "@babel/preset-react"
     ]
   }

7. webpack.config.js

const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[chunkhash].bundle.js',
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    alias: {
      react: path.join(__dirname, 'node_modules', 'react'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
    }),
  ],
}

8. public/index.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>React Boilerplate</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>

9. src/HelloWorld.js

import React from 'react'

const HelloWorld = () => {
  return (
      <h3>Hello World</h3>
  )
}

export default HelloWorld

10. src/index.js

import React from 'react'
import { render } from 'react-dom'

import HelloWorld from './HelloWorld'

render(<HelloWorld />, document.getElementById('root'))

```