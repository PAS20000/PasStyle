import { NextApiRequest, NextApiResponse } from "next"
import { dataAnimes } from ".."

const animes = (req : NextApiRequest, res : NextApiResponse) => {

    return res.status(200).json(dataAnimes)
}

export default animes