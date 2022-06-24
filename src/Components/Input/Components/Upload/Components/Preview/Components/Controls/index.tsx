import * as React from 'react'
import { GlobalProps } from '../..'
import PasStyle from '../../../../../../../..'
import useId from '../../../../../../../../Hooks/useId'
import Icons from '../../../../../../../Icons'
import useIconQuery from '../../Hooks/useIconQuery'

type Props = {
    index:React.Key
    removeFile:(index : React.Key) => void
}

const Controls = ({
    file,
    removeFile,
    index
} : GlobalProps<Props>) => {
    const { hash } = useId('PasStyle-Controls')
    const { response } = useIconQuery(file)

    return(
        <PasStyle.Div id={hash}>
              {response.isDownload ?  
                <Icons.Fa.FaDownload onClick={() => window.open(URL.createObjectURL(file))}/>
                : 
                <Icons.Fa.FaEye onClick={() => window.open(URL.createObjectURL(file))}/>
              }
            <Icons.Fa.FaTrash onClick={() => removeFile(index)}/>
        </PasStyle.Div>
    )
}

export default Controls