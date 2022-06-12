import { NextApiRequest, NextApiResponse } from "next"
import { Lang } from ".."

type Content = {
    content:[{
        id:number
        title:string
        aside:string
    }]
}

export type Langs = {
    pt:Content
    en:Content
}

const langs = (req : NextApiRequest, res : NextApiResponse) => {

    return res.status(200).json(Lang)
}

export default langs