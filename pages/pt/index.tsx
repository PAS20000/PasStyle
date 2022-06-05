import { GetStaticProps } from 'next'
import * as React from 'react'
import Code from '../../src/components/Code'
import Content from '../../src/components/Layout/Content'
import Footer from '../../src/components/Layout/Footer'
import Header from '../../src/components/Layout/Header'
import Main from '../../src/components/Layout/Main'
import Lorem from '../../src/components/Lorem'
import NavBar from '../../src/components/NavBar'
import useThemeCTX from '../../src/hooks/useThemeCTX'
import { dataAnimes, dataUsers } from '../api'

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

const HomePT = ({
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
                <Content
                    titleContent='Início rápido' 
                    text={<Lorem />}
                    tag='SECTION'
                    mg='50px'
                    pd='50px'
                    right
                >
                    <Code copyId='npm'>
                        npm i passtyle
                    </Code>
                    <Code copyId='yarn'>
                        yarn passtyle
                    </Code>
                </Content>
            </Main>
            <Footer>

            </Footer>
        </>
    )
}

export default HomePT