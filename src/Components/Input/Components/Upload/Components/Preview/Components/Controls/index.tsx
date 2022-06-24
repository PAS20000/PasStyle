import * as React from 'react'
import { GlobalProps } from '../..'
import PasStyle from '../../../../../../../..'
import Icons from '../../../../../../../Icons'
import useUpload from '../../../../Hooks/useUpload'
import useHover from '../../Hooks/useHover'
import useIconQuery from '../../Hooks/useIconQuery'

type Props = {
    index?:number
    idImg?:string
    removeFile: Function
}

const Controls = ({
    file,
    idImg,
    index,
    removeFile
} : GlobalProps<Props>) => {
    const { hover, enter, leave   } = useHover()
    const { response } = useIconQuery(file)
    
    const Icon = response.isDownload ? 
        <Icons.Fa.FaDownload onClick={() => window.open(URL.createObjectURL(file))}/>
        : 
        <Icons.Fa.FaEye onClick={() => window.open(URL.createObjectURL(file))}/>

    const Listener = () => {
        const img = document.getElementById(idImg)
        if(img){
            img.addEventListener('mouseenter', enter)
            img.addEventListener('mouseleave', leave)
        }
    }

    React.useEffect(() => {
        Listener()
    }, [])

    console.log(removeFile, index)

    return(
        <PasStyle.Div>
            {hover && Icon}
            <Icons.Fa.FaTrash onClick={() => removeFile(index)}/>
        </PasStyle.Div>
    )
}

export default Controls