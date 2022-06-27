import * as React from 'react'
import PasStyle from '../../../../../..'
import useMethods from '../../../../../../Hooks/useMethods'
import Create from '../../../../../Create'
import Icons from '../../../../../Icons'
import Card from './Components/Card'
import Metadata from './Components/Metadata'
import useIconQuery from './Hooks/useIconQuery'

type Props = {
   
}

export type GlobalProps<T = {}> = T & {
    files : File[]
}

const Preview = {
    Generic({
        files,
    } : GlobalProps) {

        const Icon = (file : File) => {
            const { response } = useIconQuery(file)

            return response.icon
        }

        console.log(files)

        return(
            <Create.Generic items={files}>  
                {files.map((file, index) =>  
                    <PasStyle.Div pd='10px' flex
                        key={index}
                    >
                        <PasStyle.Span>
                            <Icons.Fi.FiPaperclip />
                            {Icon(file)} 
                        </PasStyle.Span>
                        <Metadata 
                            file={file}
                        />
                    </PasStyle.Div>
                )}
            </Create.Generic>
        )
    },
    Gallery({
        files,
    } : GlobalProps) {

        return( 
            <Create.Generic items={files}>  
                {files.map((file, index) => 
                    <Card.Gallery
                        key={index} 
                        file={file}
                    />
                )}
            </Create.Generic>
        )
    }
    
}

export default Preview