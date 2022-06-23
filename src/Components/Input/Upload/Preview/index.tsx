import * as React from 'react'
import PasStyle from '../../../..'
import Icons from '../../../Icons'
import useFileSize from '../Hooks/useFileSize'

type Props = {
    file:File
    key:React.Key
}

const Preview = {
    default({
        file,
        key
    }: Props) {

        const { fileSize } = useFileSize()

        const split = file.type.split('/')
        const type0 =  split[0]
        const type1 = split[1]

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

        return(
            <PasStyle.Div key={key} pd='10px'>
                {icon()} 
                <PasStyle.Span>
                    {file.name} {fileSize(file)}
                </PasStyle.Span>
            </PasStyle.Div>
        )
    },
    gallery({
        file,
        key
    } : Props ) {
        const { fileSize } = useFileSize()

        return(
            <PasStyle.Div key={key}>
                <PasStyle.Img src={URL.createObjectURL(file)}
                    w='50px'
                    h='50px'
                />
                <PasStyle.Span>
                    {file.name} {fileSize(file)}
                </PasStyle.Span>
            </PasStyle.Div>
        )
    }
    
}

export default Preview