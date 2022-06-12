import { NextApiRequest, NextApiResponse } from "next"
import { Animes } from "./animes"
import { Langs } from "./langs"
import { Users } from "./users"

const id = () : number => {

    const max = 100000000000000

    return Math.floor(Math.random() * max)
}

export const dataAnimes : Array<Animes> = [
    {
        id:id(),
        name:'anime1',
        thumb:'/img/anime.png'
    },
    {
        id:id(),
        name:'anime2',
        thumb:'/img/anime.png'
    },
    {
        id:id(),
        name:'anime3',
        thumb:'/img/anime.png'
    },
    {
        id:id(),
        name:'anime4',
        thumb:'/img/anime.png'
    },
    {
        id:id(),
        name:'anime5',
        thumb:'/img/anime.png'
    },
    {
        id:id(),
        name:'anime6',
        thumb:'/img/anime.png'
    }
]

export const dataUsers : Array<Users> = [
    {
        id:id(),
        name:'User Name 1',
        email:'user1@gmail.com',
        avatar:'/img/avatar1.jpg',
        status:'inactive',
        phone: {
			ddd: "88",
			ddi: "55",
			number: "993321658"
		},
		document: {
			type: "CPF",
			number: "18223002078"
		},
		createdAt: "2021-12-14T23:15:14.715Z",
        likes:dataAnimes.slice(0, 1)
    },
    {
        id:id(),
        name:'User Name 2',
        email:'user2@gmail.com',
        avatar:'/img/avatar2.jpg',
        status:'active',
        phone: {
			ddd: "69",
			ddi: "55",
			number: "984313521"
		},
		document: {
			type: "CPF",
			number: "09362435039"
		},
		createdAt: "2022-05-12T23:15:14.715Z",
        likes:dataAnimes.slice(0, 2)
    },
    {
        id:id(),
        name:'User Name 3',
        email:'user3@gmail.com',
        avatar:'/img/avatar3.jpg',
        status:'active',
        phone: {
			ddd: "95",
			ddi: "55",
			number: "994469552"
		},
		document: {
			type: "CPF",
			number: "14260425072"
		},
		createdAt: "2022-03-24T23:15:14.715Z",
        likes:dataAnimes.slice(0, 3)
    },
    {
        id:id(),
        name:'User Name 4',
        email:'user4@gmail.com',
        avatar:'/img/avatar4.jpg',
        status:'inactive',
        phone: {
			ddd: "61",
			ddi: "55",
			number: "984726423"
		},
		document: {
			type: "CPF",
			number: "48023235060"
		},
		createdAt: "2022-01-25T23:15:14.715Z",
        likes:dataAnimes.slice(0, 4)
    },
    {
        id:id(),
        name:'User Name 5',
        email:'user5@gmail.com',
        avatar:'/img/avatar5.jpg',
        status:'active',
        phone: {
			ddd: "63",
			ddi: "55",
			number: "980692318"
		},
		document: {
			type: "CPF",
			number: "76897370053"
		},
		createdAt: "2022-04-14T23:15:14.715Z",
        likes:dataAnimes.slice(0, 5)
    }
]

export const dataLang : Array<Langs> = [{
    pt:{   
        content:[{
            id:id(),
            title:'início rápido',
            codes:[
                'npm passtyle',
                'yarn passtyle'
            ],
            aside:'aside pt'
        }]
    },
    en:{
        content:[{
            id:id(),
            title:'quick start',
            codes:[
                'npm passtyle',
                'yarn passtyle'
            ],
            aside:'aside en'
        }]
    }
}]

const datas = (req : NextApiRequest, res : NextApiResponse) => {


    return res.status(200).json({
        animes:dataAnimes,
        users:dataUsers,
        langs:dataLang
    })
}

export default datas