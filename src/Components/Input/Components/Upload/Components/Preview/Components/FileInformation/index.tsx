import * as React from 'react'
import PasStyle from '../../../../../../../..'
import useFileSize from '../../../../Hooks/useFileSize'

type Props = {
    file:File
}

const FileInformation = ({
    file
} : Props) => {

    const { fileSize } = useFileSize()

    return(
        <PasStyle.Div>
            {file.name} {fileSize(file)}
        </PasStyle.Div>
    )
}

export default FileInformation

