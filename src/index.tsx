import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { storeConfig } from './redux/store'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeConfig}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)