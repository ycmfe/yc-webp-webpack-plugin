# yc-webp-webpack-plugin
洋葱学院Png/Jpg转WebP格式化工具
# Installation
```
npm install yc-webp-webpack-plugin
```
# Usage
```
const path = require('path');
const YcWebpackPlugin = require('yc-webp-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: "./index.js",
    output: {
        path: __dirname + '/dist/',
        filename: "bundle.js"
    },
    plugins:[
        new YcWebpackPlugin({
            path: path.resolve(__dirname, './img/*'),
            compressOption: {
                q: 75
            }
        })
    ]
};
```
具体配置请参考[ycwebp](https://www.npmjs.com/package/ycwebp)