import * as React from 'react'
import Button from '../src/Components/Button'
import Input from '../src/Components/Input'
import Main from '../src/Components/Layout/Main'
import useThemeCTX from '../src/Contexts/ThemeContext/useThemeCTX'

const Home = () => {

      const { changeMode, ChangeColorByTheme } = useThemeCTX()

      const [file, setFile] = React.useState<File>()

      console.log('Eu sou o File', file)

    return(
      <Main bg={ChangeColorByTheme('gray.300', 'gray.900')} w='100%' h='100%'>
         <Button.Generic onClick={changeMode}>
            Change Theme
         </Button.Generic>
          <Input.File>
              <Button.Upload>
                Upload
              </Button.Upload>
          </Input.File>
      </Main>
    )
}

export default Home