import React from 'react'
import ReactDOM from 'react-dom'
import '@/index.css'
import App from '@/components/pages/main/App'
import * as OfflinePluginRuntime from 'offline-plugin/runtime'
OfflinePluginRuntime.install()

ReactDOM.render(<App />, document.getElementById('root'))
