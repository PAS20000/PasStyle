import { GetStaticProps } from 'next'
import * as React from 'react'
import Footer from '../../src/components/Layout/Footer'
import Header from '../../src/components/Layout/Header'
import Main from '../../src/components/Layout/Main'
import NavBar from '../../src/components/NavBar'
import { dataMusics, dataUsers } from '../api'
import { Musics } from '../api/music'
import { Users } from '../api/users'

export const getStaticProps : GetStaticProps = async (ctx) => {
    
    try {
        //const resp = await axiosConfig(`users/{params.id}/`)
        const respMusics = dataMusics
        const respUsers = dataUsers
        
        return {
            props: {
              datas:{
                  Musics:respMusics,
                  users:respUsers,
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
    }
}

const HomePT = ({
    datas
} : Props) => {


    return(
        <>
           <Header>
                <NavBar 
                    current='docs'
                />
           </Header>
            <Main>
               
            </Main>
            <Footer>

            </Footer>
        </>
    )
}

export default HomePT