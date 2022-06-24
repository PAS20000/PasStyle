import * as React from 'react'
import { GlobalProps } from '../..'
import PasStyle from '../../../../../../../..'
import useFileSize from '../../../../Hooks/useFileSize'

type Props = {
    
}

const Metadata = ({
    file,
} : GlobalProps<Props>) => {

    const { fileSize } = useFileSize()
    
    return(
        <PasStyle.Div flex center>
            <PasStyle.H4 color='white'>
                {file.name} &nbsp;
                {fileSize(file)}
            </PasStyle.H4>
        </PasStyle.Div>
    )
}

export default Metadata

