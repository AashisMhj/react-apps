import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// providers
import URLProvider from './context/URLContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <URLProvider>
      <App />
    </URLProvider>
  </React.StrictMode>,
)
