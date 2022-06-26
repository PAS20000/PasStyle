import * as React from 'react'
import Keys from './Keys'

type ClassNames = {
    father:string
    kid:string
    art?:string
    custom?:string
}

type Art = {
    Css:object
    Art:string
}



const useMethods = () => { 

    const [hash, setHash] = React.useState<string>()
    
    const Create = {
        Family(father:string, kid:string, art?:string) {
            return `🍎${father}🍎 🌱${kid}🌱 🎨${art ?? 'default'}🎨`.toUpperCase()
        },
        Range(max : number) { 
            return Math.floor(Math.random() * max).toString()
        }
    }

    React.useEffect(() => {
        setHash(Create.Range(1000000000000000))
    }, [])

    const POST = {
        PasStyle(father:string, kid:string, PasStyleTAG:string, art?:string){
            
            const pasTag = PasStyleTAG.toUpperCase()

            React.useEffect(() => {
                const element = document.querySelector(`[data-passtyle="${pasTag}"]`)
                element && element.setAttribute('data-passtyle', Create.Family(father, kid, art))
            }, [])
        },
        Art({
            Css,
            Art
        } : Art){
            return Css[Art ?? 'default']()
        }
    }

    const GET = {
        PasStyle(father:string, kid:string, art?:string){
            const content =  `[data-passtyle="${Create.Family(father, kid, art)}"]`

            return {
                query:document.querySelector(content) as HTMLElement,
                queryAll:Array.from(document.querySelectorAll(content)) as HTMLElement[],
            }
        },
        tag(tag:string){

            return {
                query:document.querySelector(tag) as HTMLElement,
                queryAll:Array.from(document.querySelectorAll(tag)) as HTMLElement[],
                getElements:document.getElementsByName(tag)
            }
        }
    }
    
    return {
        POST,
        GET
    }
}

export default useMethods