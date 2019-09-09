import React from 'react'
import { Provider } from 'react-redux'

import store from '@/store'
import Router from '@/Router'
import ThemeProviderWrapper from '@/components/wrappers/ThemeProvider'

function App () {
  return (
    <Provider store={store}>
      <ThemeProviderWrapper>
        <Router />
      </ThemeProviderWrapper>
    </Provider>
  )
}

export default App
