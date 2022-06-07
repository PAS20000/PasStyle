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

    return(
        <>
           <Header>
                <NavBar 
                    current='demo'
                />
           </Header>
            <Main>
                <Form />
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
                        setOpen={() => {}}
                    />
                )}
               
            </Main>
            <Footer>

            </Footer>
        </>
    )
}

export default Demo