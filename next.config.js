/** @type {import('next').NextConfig} */

const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const path = require('path');

const nextConfig = {
    webpack: (config, options) => {
        // config.plugins.push(new NextFederationPlugin({
        //     name: 'robinsonlam-base',
        //     filename: 'robinsonlam-base',
        // }));

        return config;
    }
}

module.exports = nextConfig
