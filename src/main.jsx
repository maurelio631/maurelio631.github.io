import { SpeedInsights } from "@vercel/speed-insights/next"
import { ChakraProvider } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
      <SpeedInsights />
    </ChakraProvider>
  </React.StrictMode>
)
