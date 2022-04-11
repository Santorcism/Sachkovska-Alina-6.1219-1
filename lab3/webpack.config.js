// webpack.config.js
const path = require('path') 
const HtmlWebpackPlugin = require('html-webpack-plugin') 
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");
/*
let htmlPageNames = [];
const pages = fs.readdirSync('./src/pages')
pages.forEach(page => {
    if (page.endsWith('.html')) {
        htmlPageNames.push(page.split('.html')[0])
    }
});
let multipleHtmlPlugins = htmlPageNames.map(name => {
    return new HtmlWebpackPlugin({
      template: `./src/pages/${name}.html`, // relative path to the HTML files
      filename: `${name}.html`, // output HTML files
      chunks: [`${name}`] // respective JS files
    })
  });
  .concat(multipleHtmlPlugins)
  */

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js', 
    },
    devServer: {
        historyApiFallback: true,
        static: path.resolve(__dirname, './dist'),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './src/pages/index.html'), //   шаблон    
            filename: 'index.html', // ім'я вихідного файлу
        }),  
        new CopyPlugin({
            patterns: [
              { from: "./src/pages"},
              { from: "./src/assets/images", to: "./assets/images"},
            ],
          }),
        ]
};
 