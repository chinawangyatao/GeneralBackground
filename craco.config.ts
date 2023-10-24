import path from 'path';
import { name } from './package.json';

const pathResolve = (pathUrl: string) => path.join(__dirname, pathUrl);

module.exports = {
  reactScriptsVersion: 'react-scripts' /* (default value) */,
  webpack: {
    alias: {
      '@': pathResolve('src'),
      '@assets': pathResolve('src/assets'),
      '@components': pathResolve('src/components'),
      '@utils': pathResolve('src/utils'),
    },
    configure(webpackConfig: any) {
      // 配置扩展扩展名
      webpackConfig.resolve.extensions = [...webpackConfig.resolve.extensions, ...['.scss', '.css']];
      // 接入微前端框架qiankun的配置,不接入微前端可以不需要
      // webpackConfig.output.library = `${name}-[name]`;
      // webpackConfig.output.libraryTarget = 'umd';
      // webpackConfig.output.globalObject = 'window';
      return webpackConfig;
    },
  },
  devServer: {
    // 本地服务的端口号
    port: 3000,
    // 本地服务的响应头设置
    headers: {
      // 允许跨域
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      '/api': {
        target: 'http://6fjjyf.natappfree.cc/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
};
