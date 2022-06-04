import { GetStaticProps } from 'next'
import * as React from 'react'
import Code from '../src/components/Code'
import Aside from '../src/components/Layout/Aside'
import Container from '../src/components/Layout/Container'
import Footer from '../src/components/Layout/Footer'
import Header from '../src/components/Layout/Header'
import Main from '../src/components/Layout/Main'
import Lorem from '../src/components/Lorem'
import NavBar from '../src/components/NavBar'
import Title from '../src/components/Title/indx'
import { Testes } from '../src/components/_PasStyle/CreateStyle/index.styles'
import useThemeCTX from '../src/hooks/useThemeCTX'
import { dataAnimes, dataUsers } from './api'
import Content from '../src/components/Content'

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
    id?:string
    name?:string
    thumb?:string
}

export type Users = {
    id?:string
    name?:string
    email?:string
    avatar?:string
    status?:string
    animes_like?:Array<Animes>
    
}

type Props = {
    datas:{
        animes:Array<Animes>
        users:Array<Users>
    }
}

const Home = ({
    datas
} : Props) => {

    const { theme } = useThemeCTX()

    return(
        <>
           <Header>
                <NavBar 
                    current='docs'
                />
           </Header>
            <Main>
               <Container
                    mg='50px'
                    pd='25px'
                    tag='SECTION'
                > 
                <Content title='Quick start' text={<Lorem />}>
                    <Code copyId='npm'>
                        npm i passtyle
                    </Code>
                    <Code copyId='yarn'>
                        yarn passtyle
                    </Code>
                </Content>
               </Container>
            </Main>
            <Footer>
                
            </Footer>
        </>
    )
}

export default Home