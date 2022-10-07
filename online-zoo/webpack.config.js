const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const pages = ['main', 'donate'];

module.exports = {
  mode: 'none',
  devtool: 'cheap-module-source-map',
  entry: pages.reduce((config, page) => {
    config[page] = `./src/pages/${page}/${page}.js`;
    return config;
  }, {}),
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: (pathData) => {
      const filepath = path.dirname(pathData.filename).split('/').slice(1).join('/');
      return `${filepath}/[name][ext]`;
    },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [].concat(
    pages.map(
      (page) => new HtmlWebpackPlugin({
        inject: true,
        template: `./src/pages/${page}/${page}.html`,
        filename: `${page}.html`,
        chunks: [page],
      }),
    ),
    new CleanWebpackPlugin(),
  ),
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(jpg|png)$/,
        type: 'asset/resource',
      },
    ],
  },
};
