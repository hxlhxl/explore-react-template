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
            }
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
    devServer: {}
};

module.exports = config;
