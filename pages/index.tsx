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
      </>
    )
}

export default Home