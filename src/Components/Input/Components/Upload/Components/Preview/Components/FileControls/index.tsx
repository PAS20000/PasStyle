import * as React from 'react'
import PasStyle from '../../../../../../../..'
import Icons from '../../../../../../../Icons'
import useFileSize from '../../../../Hooks/useFileSize'
import useIconQuery from '../../Hooks/useIconQuery'

type Props = {
    file:File
    removeFile:(index : React.Key) => void
    index:React.Key
}

const FileControls = ({
    file,
    removeFile,
    index
} : Props) => {

    const { fileSize } = useFileSize()
    const { response } = useIconQuery(file)

    return(
        <PasStyle.Div flex>
            <PasStyle.H4>
                {file.name} &nbsp;
                {fileSize(file)}
            </PasStyle.H4>
            &nbsp;
            <PasStyle.Div>
                {response.isDownload ?  
                    <Icons.Fa.FaDownload onClick={() => window.open(URL.createObjectURL(file))}/>
                    : 
                    <Icons.Fa.FaEye onClick={() => window.open(URL.createObjectURL(file))}/>
                }
                <Icons.Fa.FaTrash onClick={() => removeFile(index)}/>    
            </PasStyle.Div> 
        </PasStyle.Div>
    )
}

export default FileControls

