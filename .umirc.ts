import { defineConfig } from 'umi';
const SentryWebpackPlugin = require('@sentry/webpack-plugin');
const version = '1.0.0';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  devtool: 'source-map',
  chainWebpack(config: any, { webpack }: { webpack: any }) {
    config.plugin('sentry').use(SentryWebpackPlugin, [
      {
        include: './dist',
        release: version,
        ignore: ['node_modules'],
        org: 'dadi',
        sourceMapReference: true,
      },
    ]);
  },

  define: {
    'process.env.VERSION': version, //版本信息
    'process.env.UMI_ENV': process.env.UMI_ENV || '', //开发环境:dev,prod
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/base',
      routes: [
        { path: '/', component: '@/pages/index' },
        { path: '/home', component: '@/pages/home' },
        { path: '/user', component: '@/pages/user' },
      ],
    },
  ],
});
