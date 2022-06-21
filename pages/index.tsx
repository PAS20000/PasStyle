import * as React from 'react'
import Button from '../src/Components/Button'
import Input from '../src/Components/Input'
import useThemeCTX from '../src/Contexts/ThemeContext/useThemeCTX'

const Home = () => {

      const { changeMode } = useThemeCTX()

    return(
      <>
         <Button onClick={changeMode}>
            Change Theme
         </Button>
         <Input.File label='Upload1' maxFiles={1} getFiles={(any) => {
             console.log('upload1: '),
             any[0] && console.log(any)
         }}/>
         <Input.File label='Upload2' maxFiles={2} getFiles={(files) => {
             console.log('upload2: '),
              files[0] && console.log(files)
         }}/>
          <Input.File label='Upload3' maxFiles={3} getFiles={(files) => {
             console.log('upload3: '),
              files[0] && console.log(files)
         }}/>
      </>
    )
}

export default Home