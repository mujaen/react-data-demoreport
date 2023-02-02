import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AppFrame from 'components/AppLayout'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: false,
    },
  },
})

const rootNode = document.getElementById('app')!

ReactDOM.createRoot(rootNode).render(
  <QueryClientProvider client={queryClient}>
    <AppFrame />
  </QueryClientProvider>,
)
