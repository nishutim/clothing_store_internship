import React from 'react'
import { Provider } from 'react-redux'

import store from '@/store'
import RouterWrapper from '@/Router'
import ThemeProviderWrapper from '@/components/wrappers/ThemeProvider'

function App () {
  return (
    <Provider store={store}>
      <ThemeProviderWrapper>
        <RouterWrapper />
      </ThemeProviderWrapper>
    </Provider>
  )
}

export default App
