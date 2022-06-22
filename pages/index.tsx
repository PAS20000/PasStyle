import * as React from 'react'
import Alert from '../src/Components/Alert'
import Button from '../src/Components/Button'
import Input from '../src/Components/Input'
import useThemeCTX from '../src/Contexts/ThemeContext/useThemeCTX'
import usePopup from '../src/Hooks/usePopup'

const Home = () => {

      const { changeMode } = useThemeCTX()
      const { state } = usePopup()

    return(
      <>
         <Button onClick={changeMode}>
            Change Theme
         </Button>
         <Input.File label='Upload1' maxFiles={1} maxSize={80} get={(files, error) => {
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
         <button onClick={() => state[1](true)}>
            Open Alert
         </button>
         <Alert.Info state={state} bg='red'>
            <h1>
              Alert
            </h1>
         </Alert.Info>
      </>
    )
}

export default Home