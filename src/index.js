import React from 'react'
import ReactDOM from 'react-dom'

import * as OfflinePluginRuntime from 'offline-plugin/runtime'
import { ThemeProvider } from 'styled-components'

import App from '@/components/pages/App'
import { theme } from './globalTheme'
import { GlobalStyle } from './globalStyles'

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    <GlobalStyle />
  </>
  ,
  document.getElementById('root'))

OfflinePluginRuntime.install({
  onUpdateReady: () => OfflinePluginRuntime.applyUpdate(),
  onUpdated: () => (window.swUpdate = true),
})
