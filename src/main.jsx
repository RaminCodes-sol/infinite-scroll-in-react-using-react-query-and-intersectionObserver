import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const quertyClient = new QueryClient({ defaultOptions: {
  queries: {
    refetchOnWindowFocus: false
  }
}})

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={quertyClient}>
    <App />
  </QueryClientProvider>,
)
