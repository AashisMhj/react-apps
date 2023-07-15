import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider, } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
const queryClient = new QueryClient();
//
import App from './App.tsx'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <App />
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
