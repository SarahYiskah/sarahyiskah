const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            favicon: './favicon.ico',
            filename: 'index.html',
            title: 'Sarah Yiskah Dev',
            inject: true
        })
    ],
    resolve: {
        modules: [__dirname, 'src', 'node_modules'],
        extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
    },
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.ico$/,
                loader: 'file-loader'
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: require.resolve('babel-loader')
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: ['url-loader?limit=10000', 'img-loader']
            },
            {
                test: /\.(woff|woff2)$/,
                exclude: /node_modules/,
                loader: 'url-loader?prefix=font/&limit=5000'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
        ]
    }
}


// {
//     test: /\.(png|svg|jpg|gif)$/,
//     use: [
//         'file-loader'
//     ]
// },