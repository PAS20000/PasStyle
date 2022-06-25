import * as React from 'react'
import PasStyle from '../../../../../..'
import Create from '../../../../../Create'
import Icons from '../../../../../Icons'
import useFileSize from '../../Hooks/useFileSize'
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

        return(
            <Create.Preview files={files}>  
                {files.map((file, index) =>  
                    <PasStyle.Div pd='10px' flex
                        className='Preview Generic'
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
            </Create.Preview>
        )
    },
    Gallery({
        files,
    } : GlobalProps) {

        const { fileSize } = useFileSize()

        const Icon = (file : File) => {
            const { response } = useIconQuery(file)

            return response.icon
        }

        const random = Math.random().toString()

        const FileMetadata = (file : File) => {
            return `${file.name} ${fileSize(file)}`
        }

        return( 
            <Create.Preview files={files}>
                {files.map((file, index) => 
                    <PasStyle.Div flex
                        key={index} 
                        mg='10px'
                        border='solid 2px' 
                        b_radius='8px'
                        className='Preview Gallery'
                    >
                        {Icon(file)}
                        <PasStyle.Img id={random}
                            src={URL.createObjectURL(file)}
                            alt={FileMetadata(file)}
                            title={FileMetadata(file)}
                            w='100px'
                            h='100px'
                            b_radius='8px'
                            mg='10px'
                            border='solid 2px'
                            b_color={'white'}
                            shadow='2px 2px 10px'

                            _hover={{
                                transition: '1s',
                                op:'0.6',
                            }}
                        />
                    </PasStyle.Div>
                )}
            </Create.Preview>
        )
    }
    
}

export default Preview