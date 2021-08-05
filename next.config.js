const webpack = require('webpack')
require('dotenv').config()
const path = require('path')

module.exports = {
    images: {
        domains: ['images.prismic.io'],
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    webpack(config) {
        const env = Object.keys(process.env).reduce((acc, curr) => {
            acc[`process.env.${curr}`] = JSON.stringify(process.env[curr])
            return acc
        }, {})

        config.plugins.push(new webpack.DefinePlugin(env))

        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        })

        return config
    },
}
