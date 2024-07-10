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
          shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
        })
      )
      return webpackConfig
    },
  },
}
