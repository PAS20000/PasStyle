import * as React from 'react'
import PasStyle from '../../../..'

type Props = {
    file:File
    fileSize:(file:File) => string
}

const Preview = ({
    file,
    fileSize
} : Props) => {


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