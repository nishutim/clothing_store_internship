import React from 'react'
import ReactDOM from 'react-dom'

import * as OfflinePluginRuntime from 'offline-plugin/runtime'

import App from '@/components/pages/App'
import { GlobalStyle } from './globalStyles'

ReactDOM.render(
  <>
    <App />
    <GlobalStyle />
  </>,
  document.getElementById('root'))

OfflinePluginRuntime.install({
  onUpdateReady: () => OfflinePluginRuntime.applyUpdate(),
  onUpdated: () => (window.swUpdate = true),
})
