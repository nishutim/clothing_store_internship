import React from 'react'
import ReactDOM from 'react-dom'

import * as OfflinePluginRuntime from 'offline-plugin/runtime'

import App from '@/App'

ReactDOM.render(
  <App />,
  document.getElementById('root'))

OfflinePluginRuntime.install({
  onUpdateReady: () => OfflinePluginRuntime.applyUpdate(),
  onUpdated: () => (window.swUpdate = true),
})
