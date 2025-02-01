
const nextConfig = {
  reactStrictMode: true,
  sentry: {},
};



const { withSentryConfig } = require("@sentry/nextjs");

module.exports = withSentryConfig(
  module.exports,
  {

    org: "nagi-9z",
    project: "javascript-nextjs",


    silent: !process.env.CI,

    widenClientFileUpload: true,

    reactComponentAnnotation: {
      enabled: true,
    },

    tunnelRoute: "/monitoring",

    hideSourceMaps: true,


    disableLogger: true,

    automaticVercelMonitors: true,
  }
);
