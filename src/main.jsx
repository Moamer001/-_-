import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NextUIProvider } from "@nextui-org/react";
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </ChakraProvider>
)
