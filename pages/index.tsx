import * as React from 'react'
import Input from '../src/Components/Input'
import Container from '../src/Components/Layout/Container'
import useThemeCTX from '../src/Contexts/ThemeContext/useThemeCTX'

const Home = () => {

   const {theme} = useThemeCTX()

    return(
       <Container.Div bg={theme.colors.bg} pd='10px'>
          <Input.File label='Upload'/>
       </Container.Div>
    )
}

export default Home