import * as React from 'react'
import Button from '../src/Components/Button'
import Input from '../src/Components/Input'
import Preview from '../src/Components/Input/Components/Upload/Components/Preview'
import Container from '../src/Components/Layout/Container'
import Main from '../src/Components/Layout/Main'
import useThemeCTX from '../src/Contexts/ThemeContext/useThemeCTX'
import Upload from './upload'

const Home = () => {

      const { changeMode, ChangeColorByTheme } = useThemeCTX()

    return(
      <Main bg={ChangeColorByTheme('gray.900', 'gray.300')} w='100%' h='100%'>
         <Button.Generic onClick={changeMode}>
            Change Theme
         </Button.Generic>
          <Upload Type='Gallery'/>
          <Upload maxFiles={6}/>

          <Container.Body bg='black'>
            aswdasdasdsad
          </Container.Body>
      </Main>
    )
}

export default Home