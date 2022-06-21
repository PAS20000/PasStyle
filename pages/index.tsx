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
         <Input.File label='Upload' maxFiles={1} change={(files) => {
            console.log('Upload1 :')
            console.log(files)
         }}/>
         <Input.File label='Upload2' maxFiles={2} change={(files) => {
            console.log('Upload2 :')
            console.log(files)
         }}/>
          <Input.File label='Upload3' maxFiles={3} change={(files) => {
            console.log('Upload3 :')
            console.log(files)
         }}/>
      </>
    )
}

export default Home