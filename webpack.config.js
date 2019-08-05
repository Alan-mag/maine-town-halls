require('dotenv').config();
const webpack = require('webpack');
// Dynamic Script and Style Tags
const HTMLPlugin = require('html-webpack-plugin');
// Makes a separate CSS bundle
const ExtractPlugin = require('extract-text-webpack-plugin');
const { EnvironmentPlugin, DefinePlugin } = require('webpack');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({ path: '.env.test' })
} else if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: '.env.development' })
}

module.exports = () => {

  return {

    // Load this and everythning it cares about
    entry: `${__dirname}/src/main.js`,

    devtool: 'source-map',

    // Stick it into the "path" folder with that file name
    output: {
      filename: 'bundle.[hash].js',
      path: `${__dirname}/build`,
      publicPath: '/',
    },

    module: {
      rules: [
        // If it's a .js file not in node_modules, use the babel-loader
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        // If it's a .scss file
        {
          test: /\.scss$/,
          loader: ExtractPlugin.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                },
              },
              'resolve-url-loader',
              {
                loader: 'sass-loader',
                options: {
                  includePaths: [`${__dirname}/src/style`],
                  sourceMap: true,
                },
              },
            ],
          }),
        },
        {
          test: /\.less$/,
          use: [
            "style-loader",
            { loader: 'css-loader', options: { sourceMap: 1 } },
            {
              loader: "less-loader",
              options: {
                javascriptEnabled: true
              }
            }
          ]
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
            'postcss-loader'
          ]
        },
        {
          test: /\.(woff|woff2|ttf|eot|glyph|\.svg)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
                name: 'font/[name].[ext]',
              },
            },
          ],
        },
        {
          test: /\.(jpg|jpeg|gif|png|tiff|svg)$/,
          exclude: /\.glyph.svg/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 6000,
                name: 'image/[name].[ext]',
              },
            },
          ],
        },

      ],
    },
    plugins: [
      new HTMLPlugin({
        template: `${__dirname}/src/index.html`,
      }),
      new ExtractPlugin('bundle.[hash].css'),
      new EnvironmentPlugin(['NODE_ENV']),
      new DefinePlugin({
        __AUTH_URL__: JSON.stringify(process.env.AUTH_URL),
        __API_URL__: JSON.stringify(process.env.API_URL),
        __DEBUG__: JSON.stringify(!process.NODE_ENV),
      }),
    ],
    devServer: {
      historyApiFallback: true,
    },
  }
};