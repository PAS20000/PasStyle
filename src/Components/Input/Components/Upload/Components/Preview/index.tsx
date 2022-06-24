import * as React from 'react'
import PasStyle from '../../../../../..'
import Icons from '../../../../../Icons'
import useFileSize from '../../Hooks/useFileSize'
import useUpload from '../../Hooks/useUpload'
import Controls from './Components/Controls'
import Metadata from './Components/Metadata'
import useIconQuery from './Hooks/useIconQuery'

type Props = {
    key?:React.Key
    removeFile?:(index : React.Key) => void
}

export type GlobalProps<T = {}> = T & {
    file:File
}

const Preview = {
    Generic({
        files,
    } : {files : File[]}) {

        const Icon = (file : File) => {
            const { response } = useIconQuery(file)

            return response.icon
        }

       if(files){
            return(
                <>
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
                </>
            )
                
       } else {
            return <></>
       }
    },
    Gallery({
        file,
        key,
        removeFile
    }) {

        const { fileSize } = useFileSize()
        const { response } = useIconQuery(file)
        const random = Math.random().toString()

        const FileMetadata = (file : File) => {
            return `${file.name} ${fileSize(file)}`
        }

       

        return( 
            <PasStyle.Div flex 
                mg='10px'
                border='solid 2px' 
                b_radius='8px'
                className='Preview Gallery'
            >
                {response.icon}
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
                <Controls 
                    file={file}
                    index={key}
                    idImg={random}
                />
            </PasStyle.Div>
        )
    }
    
}

export default Preview