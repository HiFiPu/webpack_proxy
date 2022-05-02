import { defineConfig } from 'umi';

export default defineConfig({
  // base:'/api1/',
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  fastRefresh: {},
  // proxy: {
  //   '/apx': {
  //     'target': 'https://www.yuque.com/',
  //     'changeOrigin': true,
  //     'pathRewrite': { '^/apx' : '' },
  //   },
  // },
});
