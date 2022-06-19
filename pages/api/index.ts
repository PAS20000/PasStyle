import { NextApiRequest, NextApiResponse } from "next"
import { Musics } from "./music"
import { Users } from "./users"

const id = () : number => {

    const max = 100000000000000

    return Math.floor(Math.random() * max)
}

export const dataMusics : Array<Musics> = [
    {
        id:id(),
        name:'Let Me Down Slowly Tevvez Remix Parallel Universe',
        thumb:'https://i.ytimg.com/vi/8Gs6pFM-B5I/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArr1g5TpDqNRtTwfhkZh8C05b0aA',
        link:'https://youtu.be/8Gs6pFM-B5I?list=RDMM',
        createdAt: "2021-12-13T23:15:14.715Z",
    },
    {
        id:id(),
        name:'The Coasters Sh Boom Life Could Be A Dream',
        thumb:'/img/anime.png',
        link:'https://youtu.be/jEP224Sa4Rw',
        createdAt: "2021-12-13T23:15:14.715Z",
    },
    {
        id:id(),
        name:'anime3',
        thumb:'/img/anime.png',
        link:'',
        createdAt: "2021-12-12T23:15:14.715Z",
    },
    {
        id:id(),
        name:'anime4',
        thumb:'/img/anime.png',
        link:'',
        createdAt: "2021-12-11T23:15:14.715Z",
    },
    {
        id:id(),
        name:'anime5',
        thumb:'/img/anime.png',
        link:'',
        createdAt: "2021-12-10T23:15:14.715Z",
    },
    {
        id:id(),
        name:'anime6',
        thumb:'/img/anime.png',
        link:'',
        createdAt: "2021-12-09T23:15:14.715Z",
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
        likes:dataMusics.slice(0, 1)
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
        likes:dataMusics.slice(0, 2)
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
        likes:dataMusics.slice(0, 3)
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
        likes:dataMusics.slice(0, 4)
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
        likes:dataMusics.slice(0, 5)
    }
]


const datas = (req : NextApiRequest, res : NextApiResponse) => {

    return res.status(200).json({
        musics:dataMusics,
        users:dataUsers,
    })
}

export default datas