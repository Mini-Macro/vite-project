import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-mo8xmb4vokoaxtri.us.auth0.com"
    clientId="PLo5jSCb7yS1Yyl0c6NIdnQaIryKaKlI"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Auth0Provider>,
)
