import * as React from 'react'
import Keys from './Keys'

type ClassNames = {
    father:string
    kid:string
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
        } : ClassNames){
            return `🌲PasStyle🌲 🍁${father}🍁 🌸${kid}🌸`.toUpperCase()
        },
        id(id : string){
            return `🔑PasStyle🔑-${hash}-${id}`.toUpperCase()
        },
        Art({
            Css,
            Art
        } : Art){
            return {...Css[Art ?? 'default']()}
        }
    }

    const GET = {
        class({
            father,
            kid,
        }: ClassNames){

            const className = `.🌲PasStyle🌲.🍁${father}🍁.🌸${kid}🌸`.toUpperCase()

            return {
                query:document.querySelector(className),
                queryAll:Array.from(document.querySelectorAll(className)),
                getElements:document.getElementsByClassName(className.replaceAll('.',' '))
            }
        },
        id(id : string){

            const ID = `#🔑PasStyle🔑-${hash}-${id}`.toUpperCase()            

            return {
                query:document.querySelector(ID),
                getElement:document.getElementsByClassName(ID.replaceAll('#',''))
            }
        },
    }
    
    return {
        POST,
        GET
    }
}

export default useMethods