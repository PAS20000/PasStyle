import * as React from 'react'
import type { AppProps } from 'next/app'
import PasStyleProvider from '../src/Contexts'
import '../utils/css/reset.css'


const App = ({ 
  Component, 
  pageProps
} : AppProps & any) => {

  return (
    <PasStyleProvider>
      <Component {...pageProps} />
    </PasStyleProvider>
  )
}

export default App