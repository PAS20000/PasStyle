import * as React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { axiosConfig } from '../../utils/service/axios'
import { useRouter } from 'next/router'
import { dataAnimes } from '../api'

type TParams = {
    params:{
        id:string
    }
}

export const getStaticProps : GetStaticProps = async ({
    params
} : TParams) => {
    
    try {
        //const resp = await axiosConfig(`animes/${params.id}/`)
        const resp = dataAnimes[params.id]
        return {
            props: {
              anime:resp,
            },
          }

    } catch (e) {
        console.log(e)
        return {
            props: {
              anime:{},
            },
            notFound:true
          }
    }
  }

export const getStaticPaths : GetStaticPaths = async () => {
    return {
      paths: [
        { params: 
            {
                id:'1' 
            } 
        }
      ],
      fallback:true
    };
  }


const Anime = ({
  anime
}) => {
  const { query } = useRouter()

  console.log(anime)

  return(
    <div>
      <h1>
        Anime {query.id}
      </h1>
    </div>
  )
}

export default Anime