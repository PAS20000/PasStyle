import * as React from "react"
import Icons from "../../../../../Icons"

const useIconQuery = (file : File) => {

    const split1 = file.type.split('/')
    const split2 = split1[1] ? split1[1].split('-') : []
    const type0 = split1[0]
    const type1 = split1[1]

    const iconFile = {
        default(){
            return <Icons.Fi.FiPaperclip />
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
        audio(){
            return <Icons.Fa.FaFileAudio />
        },
        text(){
            return <Icons.Fi.FiFileText />
        }
    }

    const include = (string : string) : JSX.Element | undefined => {
        return split2.includes(string) && iconFile[string]()
    }

    const icon = () : JSX.Element => {
        if(iconFile[type1]){
            return iconFile[type1]()
        }
        if(iconFile[type0]){
            return iconFile[type0]()
        }
        else{
            return iconFile['default']()
        }
    }

    const response = () => {
        const arrayIcons = [
            include('zip'), 
            include('icon')
        ].filter(Icon => Icon)
        const IconJSX = arrayIcons[0]

        if(IconJSX){
            return IconJSX
        } else {
            return icon()
        }
    }
    
    return response
}

export default useIconQuery