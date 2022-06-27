import * as React from 'react'
import Button from '../src/Components/Button'
import Main from '../src/Components/Layout/Main'
import useThemeCTX from '../src/Contexts/ThemeContext/useThemeCTX'
import Upload from './upload'

const Home = () => {

      const { changeMode, ChangeColorByTheme } = useThemeCTX()

    return(
      <Main>
         <Button.Generic onClick={changeMode}>
            Change Theme
         </Button.Generic>
          <Upload />
          <Upload kind='Gallery'/>
          <Upload />
          <Upload kind='Gallery'/>
          <Upload />
          <Upload kind='Gallery'/>
          <Upload />
      </Main>
    )
}

export default Home