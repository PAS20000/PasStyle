import { NextApiRequest, NextApiResponse } from "next"
import { dataMusics } from ".."

export type Musics = {
    id?:number
    name?:string
    thumb?:string
    link?:string
    createdAt?:string
}


const Music = (req : NextApiRequest, res : NextApiResponse) => {

    return res.status(200).json(dataMusics)
}

export default Music