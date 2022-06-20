import * as React from 'react'
import Button from '../src/Components/Button'
import Input from '../src/Components/Input'
import useThemeCTX from '../src/Contexts/ThemeContext/useThemeCTX'

const Home = () => {

      const { changeMode } = useThemeCTX()

    return(
      <>
         <Button.Default onClick={changeMode}>
            Change Theme
         </Button.Default>
         <Input.File label='Upload' onChange={(e) => console.log(e)}/>
      </>
    )
}

export default Home