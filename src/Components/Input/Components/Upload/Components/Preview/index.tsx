import * as React from 'react'
import PasStyle from '../../../../../..'
import Icons from '../../../../../Icons'
import useFileSize from '../../Hooks/useFileSize'
import Controls from './Components/Controls'
import Metadata from './Components/Metadata'
import useIconQuery from './Hooks/useIconQuery'

type Props = {
    key:React.Key
    removeFile:(index : React.Key) => void
}

export type GlobalProps<T = {}> = T & {
    file:File
}

const Preview = {
    default({
        file,
        key,
        removeFile
    }: GlobalProps<Props>) {

        const { response } = useIconQuery(file)

        return(
            <PasStyle.Div key={key} pd='10px' flex>
                <PasStyle.Span>
                    <Icons.Fi.FiPaperclip />
                    {response.icon} 
                </PasStyle.Span>
                <Metadata 
                    file={file}
                />
                <Controls
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
    } : GlobalProps<Props>) {
        
        const { fileSize } = useFileSize()
        const { response } = useIconQuery(file)

        const FileMetadata = `${file.name} ${fileSize(file)}`

        return( 
            <PasStyle.Div flex
                key={key} 
                mg='10px'
                border='solid 2px' 
                b_radius='8px'
            >
                {response.icon}
                <PasStyle.Img 
                    src={URL.createObjectURL(file)}
                    alt={FileMetadata}
                    title={FileMetadata}
                    w='100px'
                    h='100px'
                    b_radius='8px'
                    mg='10px'
                    border='solid 2px'
                    b_color={'white'}
                    shadow='2px 2px 10px'
                />
                <Controls 
                    file={file}
                    index={key}
                    removeFile={removeFile}
                />
            </PasStyle.Div>
        )
    }
    
}

export default Preview