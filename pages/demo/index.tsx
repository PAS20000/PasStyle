import { GetStaticProps } from 'next'
import * as React from 'react'
import Form from './components/Form'
import Footer from '../../src/components/Layout/Footer'
import Header from '../../src/components/Layout/Header'
import Main from '../../src/components/Layout/Main'
import NavBar from '../../src/components/NavBar'
import useThemeCTX from '../../src/hooks/useThemeCTX'
import { dataAnimes, dataUsers } from '../api'
import Avatar from './components/Avatar'
import PasStyle from '../../src/components/_PasStyle'
import Container from '../../src/components/Layout/Container'
import Config from './components/Config'


export const getStaticProps : GetStaticProps = async (ctx) => {
    
    try {
        //const resp = await axiosConfig(`users/{params.id}/`)
        const respAnimes = dataAnimes
        const respUsers = dataUsers
        return {
            props: {
              datas:{
                  animes:respAnimes,
                  users:respUsers
              },
            },
          }

    } catch (e) {
        console.log(e)
        return {
            props: {
              datas:{
                  animes:[{}],
                  users:[{}]
              },
            },
            notFound:true
          }
    }
}

export type Animes = {
    id?:number
    name?:string
    thumb?:string
}

export type Users = {
    id?:number
    name?:string
    email?:string
    avatar?:string
    status?:string
    phone?: {
        ddd:string
        ddi:string
        number:string
    }
    document?: {
        type:string
        number:string
    }
    createdAt:string
    animes_like?:Array<Animes>   
}

type Props = {
    datas:{
        animes:Array<Animes>
        users:Array<Users>
    }
}


const Demo = ({
    datas
} : Props) => {

    const { theme } = useThemeCTX()
    const [showForm, setShowForm] = React.useState(false)

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