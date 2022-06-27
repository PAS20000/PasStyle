import * as React from "react"
import Icons from "../../../../../../../Icons"

const useIconQuery = (file : File) => {

    const initSplit = file.type.split('/')
    const type0 = initSplit[0]
    const type1 = initSplit[1]

    const Create = {
        split(index : number, string : string){
            return initSplit[index] ? initSplit[index].split(string) : []
        }
    }

    const split2 = Create.split(1, '-')
    const split3 = Create.split(1, '+')
  
    const iconFile = {
        unknown(){
            return <Icons.Ai.AiOutlineFileUnknown title='unknown icon'/>
        },
        pdf(){
            return <Icons.Vsc.VscFilePdf title='pdf icon'/>
        },
        json(){
            return <Icons.Vsc.VscJson title='json icon'/>
        },
        application(){
            return <Icons.Vsc.VscExtensions title='application icon'/>
        },
        zip(){
            return <Icons.Si.SiBookstack title='zip icon'/>
        },
        gif(){
            return <Icons.Ai.AiOutlineGif title='gif icon'/>
        },
        icon(){
            return <Icons.Ai.AiFillStar title='favicon icon'/>
        },
        image(){
            return <Icons.Fa.FaImage title='image icon'/>
        },
        svg(){
            return <Icons.Im.ImSvg title='svg icon'/>
        },
        audio(){
            return <Icons.Fa.FaFileAudio title='audio icon'/>
        },
        text(){
            return <Icons.Fi.FiFileText title='text icon'/>
        }
    }
    
    const Include = {
        IconFile(string : string) : JSX.Element | undefined{
            if(split2.includes(string)){
                return iconFile[string]()
            }
            if(split3.includes(string)){
                return iconFile[string]()
            }
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
        const ArrayPreview = [
            Include.IconFile('zip'), 
            Include.IconFile('icon'),
            Include.IconFile('svg')
        ].filter(Icon => Icon)

        const ArrayDownload  = [
            Include.IconFile('unknown'),
            Include.IconFile('zip'), 
        ].filter(icon => icon)

        const IconJSX = ArrayPreview[0]
        const isDownload = !!ArrayDownload[0]

        if(IconJSX){
            return {
                isDownload,
                icon:IconJSX,
                name:IconJSX.type.name
            }
        } 
        if(icon()){
            return {
                isDownload,
                icon:icon(),
                name:icon().type.name
            }
        }
    }

    console.log(response())
    
    return {
        response:response(),
        icon,
        iconFile,
        Include,
    }
}

export default useIconQuery