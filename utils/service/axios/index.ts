import axios from "axios";

export const axiosConfig = axios.create({
    baseURL:'https://localhost:3000/api/',
    headers:{
         'Content-Type': 'application/json',
         'authorization': ''
    }
})