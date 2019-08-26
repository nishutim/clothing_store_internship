import React from 'react'
import ReactDOM from 'react-dom'
import App from '@/components/pages/main/App'
import { GlobalStyle } from '@/index.styles'
import * as OfflinePluginRuntime from 'offline-plugin/runtime'

ReactDOM.render(
  // eslint-disable-next-line react/jsx-fragments
  <React.Fragment>
    <App />
    <GlobalStyle />
  </React.Fragment>,
  document.getElementById('root'))

OfflinePluginRuntime.install({
  onUpdateReady: () => OfflinePluginRuntime.applyUpdate(),
  onUpdated: () => (window.swUpdate = true),
})
