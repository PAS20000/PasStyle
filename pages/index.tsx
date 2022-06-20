import * as React from 'react'
import PasStyle from '../src'
import Container from '../src/Components/Layout/Container'
import Footer from '../src/Components/Layout/Footer'
import Header from '../src/Components/Layout/Header'
import Main from '../src/Components/Layout/Main'
import Modal from '../src/Components/Portal/Modal'
import useModal from '../src/Components/Portal/Modal/hooks/useModal'
import ModalBody from '../src/Components/Portal/Modal/ModalBody'
import useThemeCTX from '../src/Contexts/ThemeContext/useThemeCTX'

const Home = () => {

   const {theme} = useThemeCTX()
   const { state,setOpen } = useModal()

    return(
      <>
         <Header>
               <PasStyle.Button onClick={() => setOpen(true)}>
                     Open Modal
               </PasStyle.Button>
         </Header>
         <Main>
          
         </Main>
         <Footer>
               <Modal
                  state={state}
               >
                  <ModalBody color='white'>
                        abriu
                  </ModalBody>
               </Modal>
         </Footer>
      </>
    )
}

export default Home