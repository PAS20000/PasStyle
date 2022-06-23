import * as React from 'react'
import PasStyle from '../../../../../../../..'
import Icons from '../../../../../../../Icons'
import useIconQuery from '../../Hooks/useIconQuery'

type Props = {
    file:File
    removeFile:(index : React.Key) => void
    index:React.Key
}

const Controls = ({
    file,
    removeFile,
    index
} : Props) => {

    const { response } = useIconQuery(file)

    return (
        <PasStyle.Div>
            {response()}
            <Icons.Fa.FaEye onClick={() => window.open(URL.createObjectURL(file))}/>
            <Icons.Fa.FaTrash onClick={() => removeFile(index)}/> 
        </PasStyle.Div>
    )
}

export default Controls