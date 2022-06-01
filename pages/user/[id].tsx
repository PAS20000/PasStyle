import * as React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { axiosConfig } from '../../utils/service/axios'
import { useRouter } from 'next/router'
import { dataUsers } from '../api'

type TParams = {
    params:{
        id:string
    }
}

export const getStaticProps : GetStaticProps = async ({
    params
} : TParams) => {
    
    try {
        //const resp = await axiosConfig(`users/${params.id}/`)
        const resp = dataUsers[params.id]
        return {
            props: {
              user:resp,
            },
          }

    } catch (e) {
        console.log(e)
        return {
            props: {
              user:{},
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


const User = ({
  user
}) => {
  const { query } = useRouter()

  console.log(user)

  return(
    <div>
      <h1>
        User {query.id}
      </h1>
    </div>
  )
}

export default User