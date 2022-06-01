import { NextApiRequest, NextApiResponse } from "next"

export const dataAnimes = [
    {
        id:'1',
        name:'anime1',
        thumb:'/img/anime.webp'
    },
    {
        id:'2',
        name:'anime2',
        thumb:'/img/anime.webp'
    },
    {
        id:'3',
        name:'anime3',
        thumb:'/img/anime.webp'
    },
    {
        id:'4',
        name:'anime4',
        thumb:'/img/anime.webp'
    },
    {
        id:'5',
        name:'anime5',
        thumb:'/img/anime.webp'
    },
    {
        id:'6',
        name:'anime6',
        thumb:'/img/anime.webp'
    }
]

export const dataUsers = [
    {
        id:'1',
        name:'User Name 1',
        email:'user@gmail.com',
        avatar:'https://i.pinimg.com/736x/d5/ed/82/d5ed82acab71310edca849429431e505.jpg',
        status:'inactive',
        animes_like:dataAnimes.slice(0, 1)
    },
    {
        id:'2',
        name:'User Name 2',
        email:'user@gmail.com',
        avatar:'https://33.media.tumblr.com/964388f84a8052c301d6309ecea8db05/tumblr_nel87gkcTr1r2gyilo1_500.gif',
        status:'active',
        animes_like:dataAnimes.slice(0, 2)
    },
    {
        id:'3',
        name:'User Name 3',
        email:'user@gmail.com',
        avatar:'https://i.pinimg.com/236x/ec/d2/2a/ecd22ad93617a905117156091ebc7bb8.jpg',
        status:'active',
        animes_like:dataAnimes.slice(0, 3)
    },
    {
        id:'4',
        name:'User Name 4',
        email:'user@gmail.com',
        avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBwI0cCsHrPG1OeVhTfyjkBln1dbjpcO5oveG-bB4TBBLC_Iq7QOMGEaZ3IXQtb3egVpg&usqp=CAU',
        status:'inactive',
        animes_like:dataAnimes.slice(0, 4)
    },
    {
        id:'5',
        name:'User Name 5',
        email:'user@gmail.com',
        avatar:'https://i1.sndcdn.com/avatars-hNxI1fLALMFOBFzd-NXIV5Q-t500x500.jpg',
        status:'active',
        animes_like:dataAnimes.slice(0, 5)
    }
]


const datas = (req : NextApiRequest, res : NextApiResponse) => {


    return res.status(200).json({
        animes:dataAnimes,
        users:dataUsers
    })
}

export default datas