import * as React from "react"
import Icons from "../../../../../../../Icons"

const useIconQuery = (file : File) => {

    const initSplit = file.type.split('/')
    const type0 = initSplit[0]
    const type1 = initSplit[1]

    const createSplit = (index : number, string : string) => {
        return initSplit[index] ? initSplit[index].split(string) : []
    }

    const split2 = createSplit(1, '-')
    const split3 = createSplit(1, '+')

    const iconFile = {
        unknown(){
            return <Icons.Ai.AiOutlineFileUnknown title='unknown icon'/>
        },
        pdf(){
            return <Icons.Vsc.VscFilePdf />
        },
        json(){
            return <Icons.Vsc.VscJson />
        },
        application(){
            return <Icons.Vsc.VscExtensions />
        },
        zip(){
            return <Icons.Si.SiBookstack />
        },
        gif(){
            return <Icons.Ai.AiOutlineGif />
        },
        icon(){
            return <Icons.Ai.AiFillStar />
        },
        image(){
            return <Icons.Fa.FaImage />
        },
        svg(){
            return <Icons.Im.ImSvg />
        },
        audio(){
            return <Icons.Fa.FaFileAudio />
        },
        text(){
            return <Icons.Fi.FiFileText />
        }
    }

    const include = (string : string) : JSX.Element | undefined => {
        if(split2.includes(string)){
            return iconFile[string]()
        }
        if(split3.includes(string)){
            return iconFile[string]()
        }
    }

    const icon = () : JSX.Element => {
        if(iconFile[type1]){
            return iconFile[type1]()
        }
        if(iconFile[type0]){
            return iconFile[type0]()
        }
        else{
            return iconFile['unknown']()
        }
    }

    const response = () => {
        const arrayIcons = [
            include('zip'), 
            include('icon'),
            include('svg')
        ].filter(Icon => Icon)

        const IconJSX = arrayIcons[0]

        if(IconJSX){
            return IconJSX
        } else {
            return icon()
        }
    }
    
    return {
        response,
        icon,
        iconFile,
        include,
    }
}

export default useIconQuery