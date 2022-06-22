import * as React from 'react'
import Alert from '../src/Components/Alert'
import Button from '../src/Components/Button'
import Input from '../src/Components/Input'
import Main from '../src/Components/Layout/Main'
import useThemeCTX from '../src/Contexts/ThemeContext/useThemeCTX'
import usePopup from '../src/Hooks/usePopup'

const Home = () => {

      const { changeMode } = useThemeCTX()
      const { state } = usePopup()
      
    return(
      <Main bg='#00000072' w='100%' h='100vh'>
         <Button onClick={changeMode}>
            Change Theme
         </Button>
         <Input.File label='Upload1' bg='red' maxSize={80} get={(files, error) => {
             console.log('upload1: '),
             console.log(files)
             console.log(error)
         }}/>
         <Input.File label='Upload2' maxFiles={2} maxSize={80} get={(files, error) => {
             console.log('upload2: '),
             console.log(files)
             console.log(error)
         }}/>
          <Input.File label='Upload3' maxFiles={3} maxSize={80} get={(files, error) => {
             console.log('upload3: '),
             console.log(files)
             console.log(error)
         }}/>
      </Main>
    )
}

export default Home