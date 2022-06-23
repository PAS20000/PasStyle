import * as React from 'react'
import Button from '../src/Components/Button'
import Input from '../src/Components/Input'
import Main from '../src/Components/Layout/Main'
import useThemeCTX from '../src/Contexts/ThemeContext/useThemeCTX'

const Home = () => {

      const { changeMode } = useThemeCTX()

      const [file, setFile] = React.useState<File>()

      console.log('Eu sou o File', file)
      
    return(
      <Main bg='#00000072' w='100%' h='100%'>
         <Button onClick={changeMode}>
            Change Theme
         </Button>
         <Input.File label='Upload1' bg='red' get={(files, error) => {
             console.log('upload1: '),
             console.log(files)
             console.log(error)
             setFile(files[0])
         }}/>
         <Input.File kind='gallery' label='Upload max : 10' maxFiles={10} get={(files, error) => {
             console.log('upload2: '),
             console.log(files)
             console.log(error)
             error.exist && error.reset
         }}/>
          <Input.File label='Upload max : 20' maxFiles={20} get={(files, error) => {
             console.log('upload3: '),
             console.log(files)
             console.log(error)
         }}/>
      </Main>
    )
}

export default Home