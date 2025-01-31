const { withSentry } = require('@sentry/nextjs');

module.exports = withSentry({
  reactStrictMode: true,
  sentry: {
    // outras configurações do Sentry
  },
});
