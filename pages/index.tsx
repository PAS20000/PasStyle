import * as React from 'react'
import Button from '../src/Components/Button'
import Input from '../src/Components/Input'
import Preview from '../src/Components/Input/Components/Upload/Components/Preview'
import Main from '../src/Components/Layout/Main'
import useThemeCTX from '../src/Contexts/ThemeContext/useThemeCTX'
import Upload from './upload'

const Home = () => {

      const { changeMode, ChangeColorByTheme } = useThemeCTX()

    return(
      <Main bg={ChangeColorByTheme('gray.300', 'gray.900')} w='100%' h='100%'>
         <Button.Generic onClick={changeMode}>
            Change Theme
         </Button.Generic>
          <Upload />
          <Upload />
      </Main>
    )
}

export default Home