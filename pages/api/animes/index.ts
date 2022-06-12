import { NextApiRequest, NextApiResponse } from "next"
import { dataAnimes } from ".."

export type Animes = {
    id?:number
    name?:string
    thumb?:string
}


const animes = (req : NextApiRequest, res : NextApiResponse) => {

    return res.status(200).json(dataAnimes)
}

export default animes