import * as React from 'react'
import Input from '../src/Components/Input'
import Container from '../src/Components/Layout/Container'
import Footer from '../src/Components/Layout/Footer'
import Header from '../src/Components/Layout/Header'
import Main from '../src/Components/Layout/Main'

const Home = () => {

    return(
       <>
          <Header>

          </Header>
          <Main>
             <Container.Div>
                <Input.Text />
             </Container.Div>
          </Main>
          <Footer>

          </Footer>
       </>
    )
}

export default Home