import { GetStaticProps } from 'next'
import * as React from 'react'
import Form from './components/Form'
import Footer from '../../src/components/Layout/Footer'
import Header from '../../src/components/Layout/Header'
import Main from '../../src/components/Layout/Main'
import NavBar from '../../src/components/NavBar'
import useThemeCTX from '../../src/hooks/useThemeCTX'
import { dataAnimes, dataLang, dataUsers } from '../api'
import Avatar from './components/Avatar'
import PasStyle from '../../src/components/_PasStyle'
import Container from '../../src/components/Layout/Container'
import Config from './components/Config'
import { Animes } from '../api/animes'
import { Users } from '../api/users'
import { Langs } from '../api/langs'

export const getStaticProps : GetStaticProps = async (ctx) => {
    
    try {
        //const resp = await axiosConfig(`users/{params.id}/`)
        const respAnimes = dataAnimes
        const respUsers = dataUsers
        const respLangs = dataLang
        return {
            props: {
              datas:{
                  animes:respAnimes,
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
                  animes:[{}],
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
        animes:Array<Animes>
        users:Array<Users>
        langs:Array<Langs>
    }
}

export type ShowState = 'css' | 'hover' | 'props' | 'create'

const Demo = ({
    datas
} : Props) => {

    const { theme } = useThemeCTX()
    const [showForm, setShowForm] = React.useState(false)
    const [ show, setShow ] = React.useState<ShowState>('props')

    return(
        <>
           <Header>
                <NavBar 
                    current='demo'
                />
           </Header>
            <Main>
                {showForm && 
                    <PasStyle 
                        bg='#0000009d' 
                        w='100%' 
                        h='100vh' 
                        tag='DIV' 
                        position='absolute'
                    >
                        <Form 
                            showForm={showForm}
                            setShowForm={setShowForm}
                            setShow={setShow}
                            show={show}
                        />
                    </PasStyle>
                }
               <Container 
                    pd='30px' 
                    mg='50px'
                    bg={theme.colors.bg}
                    b_Radius='8px'
                    shadow='2px 2px 10px black'
                >
                   <Config 
                       setShowForm={setShowForm}
                       setShow={setShow}
                   />
                    {dataUsers.map(user =>  
                        <Avatar key={user.id}
                            createdAt={user.createdAt}
                            animes_like={user.likes}
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