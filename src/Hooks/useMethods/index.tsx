import * as React from 'react'
import Keys from './Keys'

type ClassNames = {
    father:string
    kid:string
    custom?:string
}

type Art = {
    Css:object
    Art:string
}



const useMethods = () => { 

    const range = (max : number) => { 
        return Math.floor(Math.random() * max).toString()
    }
    
    const [hash, setHash] = React.useState<string>()

    React.useEffect(() => {
        setHash(range(1000000000000000))
    }, [])

    const POST = {
        class({
            father,
            kid,
            custom
        } : ClassNames){
            return `🌲PasStyle🌲 🍁${father}🍁 🌸${kid}🌸`.toUpperCase() + (custom ?? '')
        },
        id(id : string, custom ?: string){
            return `${id}-${hash}🔑PasStyle🔑`.toUpperCase() + (custom ?? '')          
        },
        Art({
            Css,
            Art
        } : Art){
            return Css[Art ?? 'default']()
        }
    }

    const GET = {
        class({
            father,
            kid,
            custom
        }: ClassNames){

            const className = `.🌲PasStyle🌲.🍁${father}🍁.🌸${kid}🌸`.toUpperCase() + (custom ?? '')

            return {
                query:document.querySelector(className) as HTMLElement,
                queryAll:Array.from(document.querySelectorAll(className)) as HTMLElement[],
                getElements:document.getElementsByClassName(className.replaceAll('.',' '))
            }
        },
        id(id : string, custom ?: string){

            const ID = `#${id}-${hash}🔑PasStyle🔑`.toUpperCase() + (custom ?? '')   

            return {
                query:document.querySelector(ID) as HTMLElement ,
                getElement:document.getElementsByClassName(ID.replaceAll('#',''))
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