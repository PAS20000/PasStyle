import * as React from 'react'
import PasStyle from '../../../../../../../..'
import Icons from '../../../../../../../Icons'

type Props = {
    removeFile:(index : React.Key) => void
    index:React.Key
}

const Controls = ({
    removeFile,
    index
} : Props) => {

    return (
        <PasStyle.Div>
            <Icons.Fa.FaEye />
            <Icons.Fa.FaTrash onClick={() => removeFile(index)}/> 
        </PasStyle.Div>
    )
}

export default Controls