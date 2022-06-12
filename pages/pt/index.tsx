import { GetStaticProps } from 'next'
import * as React from 'react'
import Code from '../../src/components/Code'
import Content from '../../src/components/Layout/Content'
import Footer from '../../src/components/Layout/Footer'
import Header from '../../src/components/Layout/Header'
import Main from '../../src/components/Layout/Main'
import NavBar from '../../src/components/NavBar'
import useThemeCTX from '../../src/hooks/useThemeCTX'
import { dataMusics, dataLang, dataUsers } from '../api'
import { Musics } from '../api/music'
import { Langs } from '../api/langs'
import { Users } from '../api/users'

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
        musics:Array<Musics>
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