import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
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
import { Animes } from '../api/animes'
import { Users } from '../api/users'

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