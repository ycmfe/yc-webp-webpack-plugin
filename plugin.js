const webp = require('ycwebp');

class YcWebpWebpackPlugin {
    constructor(options) {
        this.options = options;
    }
    apply(compiler) {
        const onAfterEmit = (compilation, cb) => {
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
            compiler.hooks.afterEmit.tapAsync('YcWebpWebpackPlugin', onAfterEmit);
        } else {
            // older versions
            compiler.plugin('after-emit', onAfterEmit);
        }
    }
}

module.exports = YcWebpWebpackPlugin;