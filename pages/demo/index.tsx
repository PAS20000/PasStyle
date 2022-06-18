import { GetStaticProps } from 'next'
import * as React from 'react'
import Form from './components/Form'
import Footer from '../../src/components/Layout/Footer'
import Header from '../../src/components/Layout/Header'
import Main from '../../src/components/Layout/Main'
import NavBar from '../../src/components/NavBar'
import useThemeCTX from '../../src/hooks/useThemeCTX'
import { dataMusics, dataLang, dataUsers } from '../api'
import Avatar from './components/Avatar'
import Container from '../../src/components/Layout/Container'
import Config from './components/Config'
import { Musics } from '../api/music'
import { Users } from '../api/users'
import { Langs } from '../api/langs'
import Popup from '../../src/components/Popup'
import usePopUp from '../../src/components/Popup/hooks/usePopup'
import PasStyle from '../../src/components/_PasStyle'
import PopupContainer from '../../src/components/Popup/PopupContainer'

export const getStaticProps : GetStaticProps = async (ctx) => {
    
    try {
        //const resp = await axiosConfig(`users/{params.id}/`)
        const respMusics = dataMusics
        const respUsers = dataUsers
        const respLangs = dataLang
        return {
            props: {
              datas:{
                  Musics:respMusics,
                  users:respUsers,
                  langs:respLangs
              },
            },
          }

    } catch (e) {
        console.log(e)
        return {
            props: {
              datas:{
                  Musics:[{}],
                  users:[{}],
                  langs:[{}]
              },
            },
            notFound:true
          }
    }
}

type Props = {
    datas:{
        Musics:Array<Musics>
        users:Array<Users>
        langs:Array<Langs>
    }
}

export type ShowState = 'css' | 'hover' | 'props' | 'create'

const Demo = ({
    datas
} : Props) => {

    const { theme } = useThemeCTX()
    const [ show, setShow ] = React.useState<ShowState>('props')
    const state = usePopUp()

    return(
        <>
           <Header>
                <NavBar 
                    current='demo'
                />
           </Header>
            <Main>
                    <Popup
                        state={state}
                    >
                        <PopupContainer 
                            state={state}
                            mg='0px 30px 30px' 
                            b_Radius='8px'
                            shadow='2px 2px 10px black'
                            bg={theme.colors.bg}
                            closeFooter
                            closeHead
                        >
                            <Form
                                setState={state[1]}
                                setShow={setShow}
                                show={show}
                            />
                        </PopupContainer>
                    </Popup>
               <Container 
                    pd='50px' 
                    mg='50px'
                    bg={theme.colors.bg}
                    b_Radius='8px'
                    shadow='2px 2px 10px black'
                >
                   <Config 
                       setState={state[1]}
                       setShow={setShow}
                   />
                    {dataUsers.map(user =>  
                        <Avatar key={user.id}
                            createdAt={user.createdAt}
                            likes={user.likes}
                            avatar={user.avatar}
                            document={user.document}
                            email={user.email}
                            name={user.name}
                            id={user.id}
                            phone={user.phone}
                            status={user.status}
                        />
                    )}
               </Container>
            </Main>
            <Footer>

            </Footer>
        </>
    )
}

export default Demo