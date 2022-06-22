import * as React from 'react'
import PasStyle from '../../../..'
import useFileSize from '../Hooks/useFileSize'

type Props = {
    file:File
}

const Preview = ({
    file,
} : Props) => {

    const { fileSize } = useFileSize()

    return(
        <PasStyle.Div>
            <PasStyle.Img src={URL.createObjectURL(file)}
                w='50px'
                h='50px'
            />
            <PasStyle.Span>
                {file.name}-{fileSize(file)}
            </PasStyle.Span>
        </PasStyle.Div>
    )
}

export default Preview