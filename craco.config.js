const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  devServer: {
    port: 3001,
    historyApiFallback: {
      index: '/workouts/index.html',
    },
  },
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.output.publicPath = 'auto'
      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: 'workouts',
          filename: 'remoteEntry.js',
          exposes: {
            './App': './src/App',
          },
          remotes: {
            container: 'container@http://localhost:3000/remoteEntry.js',
          },
          shared: {
            react: { singleton: true },
            'react-dom': { singleton: true },
            '@reduxjs/toolkit': { singleton: true },
            'react-redux': { singleton: true },
          },
        })
      )
      return webpackConfig
    },
  },
}
