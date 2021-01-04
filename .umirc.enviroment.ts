import { defineConfig } from 'umi';

export default defineConfig({
  define: {
    'process.env.SENTRY_DSN': 'https://xxxxxx@sentry.xx.com/xx',
    'process.env.APP_URL': '', //目前没用
  },
});
