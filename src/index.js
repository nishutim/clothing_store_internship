import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import * as OfflinePluginRuntime from 'offline-plugin/runtime'
import { ThemeProvider } from 'styled-components'

import store from '@/store'
import AppContainer from '@/components/pages/App'
import { theme } from './globalTheme'
import { GlobalStyle } from './globalStyles'

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <>
        <AppContainer />
        <GlobalStyle />
      </>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'))

OfflinePluginRuntime.install({
  onUpdateReady: () => OfflinePluginRuntime.applyUpdate(),
  onUpdated: () => (window.swUpdate = true),
})
