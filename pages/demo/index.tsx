import { GetStaticProps } from 'next'
import * as React from 'react'
import Avatar from '../../src/components/Avatar'
import NavBar from '../../src/components/NavBar'
import PasStyle from '../../src/components/_PasStyle'
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

const Demo = ({
    datas
} : Props) => {

    const { theme } = useThemeCTX()

    return(
        <>
           <PasStyle 
             tag='HEADER'
             position='fixed'
             w='100%'
             transform='translateY(-2vh)'
             z='3'
           >
                <NavBar 
                    current='demo'
                />
           </PasStyle>
            <PasStyle 
                tag='MAIN' 
                pd='60px 0px 50px'
                h='100%'
                bg={theme.colors.darkGray}
            >
             
            </PasStyle>
           <PasStyle tag='FOOTER'>
              
           </PasStyle>
        </>
    )
}

export default Demo