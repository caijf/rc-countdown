import { defineConfig } from 'dumi';

const isDev = process.env.NODE_ENV === 'development';
const publicPath = !isDev ? '/rc-countdown-view/' : '/';

export default defineConfig({
  title: 'rc-countdown-view',
  history: {
    type: 'hash',
  },
  hash: true,
  publicPath,
  favicon: 'https://www.caijinfeng.com/favicon.ico',
  logo: 'https://www.caijinfeng.com/logo.png',
  outputPath: 'docs-dist',

  // esbuild: isDev,
  nodeModulesTransform: {
    type: isDev ? 'none' : 'all'
  },
  targets: {
    ie: 11
  },
  // more config: https://d.umijs.org/config
});
