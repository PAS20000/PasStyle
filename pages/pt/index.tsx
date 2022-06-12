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
import { dataAnimes, dataLang, dataUsers } from '../api'
import { Animes } from '../api/animes'
import langs, { Langs } from '../api/langs'
import { Users } from '../api/users'

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
                {datas.langs.map(lang => lang.pt.content.map(content => 
                    <Content 
                        tag='SECTION'
                        mg='50px'
                        pd='50px'
                        right
                        key={content.id} 
                        titleContent={content.title} 
                        text={content.aside}
                    >
                        {content.codes.map((code, index) => 
                            <Code 
                                key={index}
                                copyId={index.toString()}
                            >
                                {code}
                            </Code>
                        )}
                    </Content>
                ))}
            </Main>
            <Footer>

            </Footer>
        </>
    )
}

export default HomePT