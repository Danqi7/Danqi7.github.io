const path = require('path');

module.exports = {
  entry: {
    index: './src/index.tsx',
    about: './src/about.tsx',
    blog: './src/blog.tsx',
    blog_poems: './src/blog_poems.tsx'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
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
        {
          test: /\.css$/,
          use: [
              'style-loader',
              'css-loader',
              {
                  loader: 'postcss-loader',
                  options: {
                      postcssOptions: {
                          plugins: [
                              'postcss-preset-env',
                              'tailwindcss',
                              'autoprefixer',
                          ],
                      },
                  },
              },
          ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};