import * as React from 'react'
import Button from '../src/Components/Button'
import useThemeCTX from '../src/Contexts/ThemeContext/useThemeCTX'

const Home = () => {

      const { changeMode } = useThemeCTX()

    return(
      <>
         <Button.Default onClick={() => changeMode()}>
            Change Theme
         </Button.Default>
      </>
    )
}

export default Home