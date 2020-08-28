const fs = require('fs');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const babelOption = JSON.parse(fs.readFileSync(`${__dirname}/.babelrc`));

const config = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(jsx?|tsx?)$/,
                include: [path.resolve(__dirname, './src')],
                use: [
                    {
                        loader: 'babel-loader',
                        options: babelOption
                    }
                ]
            },
            {
              test: /\.css$/,
              use: [
                'style-loader',
                {
                  loader: 'css-loader',
                  options: {
                    importLoaders: 1,
                    modules: false,
                    // camelCase: true,
                    sourceMap: true
                    // minimize: false
                  }
                },
                'postcss-loader'
              ]
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'index.html'),
            chunksSortMode: 'none'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
        }
    },
    devServer: {
        port: 9191,
        host: '0.0.0.0'
    }
};

module.exports = config;
