const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
      }),
      new InjectManifest({
        swSrc: './src-sw.js',
      swDest: 'service-worker.js',  
       }),
       new WebpackPwaManifest({
        name: 'Text Editor',
        short_name: 'TextEditor',
        description: 'A simple text editor as a Progressive Web App',
        background_color: '#ffffff',
        theme_color: '#317EFB',
        start_url: '/',
        publicPath: '/',
        icons: [
    {
    src: path.resolve('src/images/icon.png'),
    sizes: [96, 128, 192, 256, 384, 512], // Multiple sizes
    destination: path.join('icons'),
     },
    ],
   }),
  ],
module: {
rules: [
  {
  test: /\.css$/i,
  use: ['style-loader', 'css-loader'],
     },
    {
        test: /\.m?js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
       },
      },
     },
    ],
   },
  };
};