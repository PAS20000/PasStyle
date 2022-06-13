import { NextApiRequest, NextApiResponse } from "next"
import { dataLang } from ".."

type ObjConent = {
    id:number
    title:string
    codes:Array<string>
    aside:string
}

type Content = {
    content:ObjConent[]
}

export type Langs = {
    pt:Content
    en:Content
}

const langs = (req : NextApiRequest, res : NextApiResponse) => {

    return res.status(200).json(dataLang)
}

export default langs