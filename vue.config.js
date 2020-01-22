const path = require('path');

// const DEV_MODE = process.env.NODE_ENV === 'development';
const PRO_MODE = process.env.NODE_ENV === 'production';

function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: "@import '~@/styles/mixins', '~@/styles/variables';"
            }
        }
    },
    assetsDir: 'static',
    productionSourceMap: false,
    publicPath: PRO_MODE ? '' : '/',
    chainWebpack: config => {
        config.resolve.alias
            .set('@core', resolve('src/components'))
            .set('services', resolve('src/services'));
    }
    /* devServer: {
          // after: require('./mock/server.js'),
          proxy: {
              // '/game': {
              //     target: 'http://120.197.130.114:8889',
              //     ws: false,
              //     changeOrigin: false
              // }
          }
      } */
};
