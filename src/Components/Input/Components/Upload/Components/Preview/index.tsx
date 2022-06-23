import * as React from 'react'
import PasStyle from '../../../../../..'
import Icons from '../../../../../Icons'
import FileControls from './Components/FileControls'
import useIconQuery from './Hooks/useIconQuery'

type Props = {
    file:File
    key:React.Key
    removeFile:(index : React.Key) => void
}

const Preview = {
    default({
        file,
        key,
        removeFile
    }: Props) {

        const { response } = useIconQuery(file)

        return(
            <PasStyle.Div key={key} pd='10px' flex>
                <PasStyle.Span>
                    <Icons.Fi.FiPaperclip />
                    {response.icon} 
                </PasStyle.Span>
                <FileControls 
                    file={file}
                    index={key} 
                    removeFile={removeFile}
                />
            </PasStyle.Div>
        )
    },
    gallery({
        file,
        key,
        removeFile
    } : Props ) {

        return(
            <PasStyle.Div key={key} flex>
                <PasStyle.Img src={URL.createObjectURL(file)}
                    w='10%'
                    h='10%'
                    b_radius='8px'
                />
                <FileControls 
                    file={file}
                    index={key} 
                    removeFile={removeFile}
                />
            </PasStyle.Div>
        )
    }
    
}

export default Preview