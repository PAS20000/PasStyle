import { NextApiRequest, NextApiResponse } from "next"
import { dataUsers } from ".."

const users = (req : NextApiRequest, res : NextApiResponse) => {

    return res.status(200).json(dataUsers)
}

export default users