/*
next-global-css is needed to import monaco-editor properly
See https://github.com/vercel/next.js/discussions/27953#discussioncomment-1992992
*/
const { withGlobalCss } = require('next-global-css');

const withConfig = withGlobalCss();

module.exports = withConfig({
  env: {
    IS_TEST_ENV: process.env.IS_TEST_ENV,
    NEW_NEXT_PUBLIC_FIREBASE_PROJECT_ID:
      process.env.NEW_NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    NEW_FIREBASE_PRIVATE_KEY: process.env.NEW_FIREBASE_PRIVATE_KEY,
    NEW_FIREBASE_CLIENT_EMAIL: process.env.NEW_FIREBASE_CLIENT_EMAIL,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
});
