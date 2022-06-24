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
         <Button onClick={changeMode}>
            Change Theme
         </Button>
         <Input.File Art='gallery' bg='red'label='Upload max : 10' maxFiles={10} get={(files, error) => {
             console.log('upload2: '),
             console.log(files)
             console.log(error)
             error.exist && error.reset
          }}/>
      </Main>
    )
}

export default Home