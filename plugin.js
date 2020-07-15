const webp = require('ycwebp');

class YcWebpWebpackPlugin {
    constructor(options) {
        this.options = options;
    }
    apply(compiler) {
        const onEmit = (compilation, cb) => {
            const { path, fileOption, compressOption } = this.options;
            return webp({
                path,
                fileOption,
                compressOption
            }).then(() => {
                cb();
            })
            .catch((err) => {
                console.log(err);
                cb();
            })
        };

        if (compiler.hooks) {
            // webpack 4.x
            compiler.hooks.afterEmit.tapAsync('YcWebpWebpackPlugin', onEmit);
        } else {
            // older versions
            compiler.plugin('afterEmit', onEmit);
        }
    }
}

module.exports = YcWebpWebpackPlugin;