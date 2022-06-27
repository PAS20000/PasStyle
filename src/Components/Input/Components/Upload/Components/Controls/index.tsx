import * as React from 'react'
import PasStyle from '../../../../../..'
import Create from '../../../../../Create'
import Icons from '../../../../../Icons'
import useHover from '../Preview/Hooks/useHover'
import useIconQuery from '../Preview/Hooks/useIconQuery'

type Props = {
    files?:File[]
    index?:number
}

const Controls = {
    Generic({
        files,
        index,
    } : Props) {
        const { hover, enter, leave   } = useHover()

        const Icon = (file : File) => {
            const { response } = useIconQuery(file)

            if(response.isDownload){
                return <Icons.Fa.FaDownload onClick={() => window.open(URL.createObjectURL(file))}/>
            } else {
               return <Icons.Fa.FaEye onClick={() => window.open(URL.createObjectURL(file))}/>
            }
        }
        
        return(
            <Create.Generic items={files}>
                {files.map((file, index) => 
                    <PasStyle.Div key={index}>
                        {!hover && 
                            <>
                                {Icon(file)}
                                <PasStyle.Span>
                                    <Icons.Fa.FaTrash />
                                </PasStyle.Span>
                            </>
                        }
                    </PasStyle.Div>
                )}
            </Create.Generic>
        )
    }
}

export default Controls