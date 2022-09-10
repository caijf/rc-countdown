import { defineConfig } from 'dumi';

const publicPath = process.env.NODE_ENV === 'production' ? '/rc-countdown-view/' : '/';

export default defineConfig({
  title: 'rc-countdown-view',
  history: {
    type: 'hash',
  },
  hash: true,
  publicPath,
  favicon: 'https://www.caijinfeng.com/favicon.ico',
  logo: 'https://www.caijinfeng.com/logo.png',
  outputPath: 'docs-dist'

  // more config: https://d.umijs.org/config
});
