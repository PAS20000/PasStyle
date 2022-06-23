import * as React from 'react'
import PasStyle from '../../../..'
import Icons from '../../../Icons'
import useFileSize from '../Hooks/useFileSize'
import useIconQuery from './Hooks/useIconQuery'

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
        const response = useIconQuery(file)

        return(
            <PasStyle.Div key={key} pd='10px'>
                <PasStyle.Span>
                    {response()} 
                </PasStyle.Span>
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