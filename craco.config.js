const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: 'container',
          filename: 'remoteEntry.js',
          exposes: {
            './kahunas': './src/index',
          },
          remotes: {
            remoteApp: `remoteApp@${'http://localhost:3000'}`,
          },
          shared: {
            react: {
              singleton: true,
            },
            'react-dom': {
              singleton: true,
            },
          },
        })
      )

      return webpackConfig
    },
  },
}
