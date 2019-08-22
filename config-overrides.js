const path = require('path')
const OfflinePlugin = require('offline-plugin')

module.exports = function override (config, env) {
  config.resolve = {
    ...config.resolve,
    alias: { '@': path.resolve(__dirname, 'src') },
  }
  config.plugins = [
    ...config.plugins,
    new OfflinePlugin({
      caches: 'all',
      updateStrategy: 'all',
      responseStrategy: 'cache-first',
      autoUpdate: 1000 * 60 * 2,
      externals: ['manifest.json', 'favicon.ico', 'sw.js'],
      ServiceWorker: {
        events: true,
        navigateFallbackURL: '/',
      },
    }),
  ]
  return config
}
