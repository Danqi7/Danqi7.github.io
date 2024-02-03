const path = require('path');

module.exports = {
  entry: {
    index: './src/index.tsx',
    about: './src/about.tsx',
    blog: './src/blog.tsx',
    blog_poems: './src/blog_poems.tsx',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  mode: 'development',
  watch: true,
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            use: 'babel-loader',
            exclude: /node_modules/
        },
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};