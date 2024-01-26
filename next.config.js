/** @type {import('next').NextConfig} */

const NextFederationPlugin = require('@module-federation/nextjs-mf');

// this enables you to use import() and the webpack parser
// loading remotes on demand, not ideal for SSR
const remotes = isServer => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    // reminders: `reminders@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
  };
};
module.exports = {
    distDir: 'build', // Defined build directory

    webpack(config, options) {
        // config.plugins.push(
        //     new NextFederationPlugin({
        //         name: 'robbylcobase',
        //         filename: 'static/chunks/remoteEntry.js',
        //         extraOptions: {
        //             debug: true
        //         },
        //         shared: {
        //             react: {
        //                 eager: true,
        //                 singleton: true,
        //                 requiredVersion: false,
        //             },
        //             "react-dom": {
        //                 eager: true,
        //                 singleton: true,
        //                 requiredVersion: false,
        //             }
        //         }
        //     })
        // );

        return config;
    },
};