import { NextApiRequest, NextApiResponse } from "next"
import { dataUsers } from ".."
import { Animes } from "../animes"


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
    likes?:Array<Animes>   
}

const users = (req : NextApiRequest, res : NextApiResponse) => {

    return res.status(200).json(dataUsers)
}

export default users