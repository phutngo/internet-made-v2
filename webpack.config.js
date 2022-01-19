const src = 'src';
const dist = 'public';

const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); ``
const { HotModuleReplacementPlugin } = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const developmentMode = process.env.NODE_ENV === 'development';
const productionMode = !developmentMode;

module.exports = {
    context: path.resolve(__dirname, src),
    entry: {
        index: ["@babel/polyfill", "react-hot-loader/patch", "./index.js"],
    },
    output: {
        path: path.resolve(__dirname, dist),
        filename: "[name].js",
        publicPath: "/"
    },
    optimization: {
        splitChunks: {
            chunks: "all",
        },
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"],
        alias: {
            '@root': path.resolve(__dirname, src)
        }
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].min.css"
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    context: "assets/images",
                    from: "**/*.{svg,png,jpeg,jpg,webp,gif}",
                    to: "assets/images",
                    noErrorOnMissing: true
                },
                {
                    context: "assets/fonts",
                    from: "**/*.{ttf,woff,woff2,eot}",
                    to: "assets/fonts",
                    noErrorOnMissing: true
                },
                {
                    context: "assets/videos",
                    from: "**/*.{avi,mkv,mp4,webm,ogf}",
                    to: "assets/videos",
                    noErrorOnMissing: true
                },
                {
                    context: "json",
                    from: "**/*.json",
                    to: "json",
                    noErrorOnMissing: true
                }
            ]
        }),
        new HtmlWebpackPlugin({
            template: "index.html",
            title: "Todo.",
            favicon: "favicon.png",
            minify: {
                collapseWhitespace: productionMode
            },
        }),
        new HotModuleReplacementPlugin(),
        new CssMinimizerPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "../"
                        }
                    },
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.(woff|woff2|eot|otf|ttf|jpe?g|png|svg|webp|avi|mkv|mp4|webm|ogf|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[path][name].[ext]",
                    }
                }
            },
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                "targets": "defaults"
                            }],
                            '@babel/preset-react'
                        ],
                        plugins: [
                            "@babel/plugin-proposal-private-methods",
                            "@babel/plugin-proposal-class-properties",
                            "react-hot-loader/babel"
                        ]
                    }
                }
            }
        ]
    }
}