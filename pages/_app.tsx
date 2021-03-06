import * as React from 'react'
import type { AppProps } from 'next/app'
import PasStyleProvider from '../src/Contexts'


const App = ({ 
  Component, 
  pageProps
} : AppProps & any) => {

  return (
    <React.StrictMode>
      <PasStyleProvider>
        <Component {...pageProps} />
      </PasStyleProvider>
    </React.StrictMode>
  )
}

export default App