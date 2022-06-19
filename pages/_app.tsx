import type { AppProps } from 'next/app'
import GlobalProivider from '../src/contexts'
import PasStyleProvider from '../src/_PasStyle/Contexts'
import '../utils/fonts.css'


const App = ({ 
  Component, 
  pageProps 
} : AppProps) => {



  return (
    <PasStyleProvider>
      <GlobalProivider>
          <Component {...pageProps} />
      </GlobalProivider>
    </PasStyleProvider>
  )
}

export default App