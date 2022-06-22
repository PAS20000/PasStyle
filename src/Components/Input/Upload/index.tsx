import * as React from 'react'
import { InputPropsMethod } from '..'
import PasStyle, { PasStyleProps } from '../../..'
import Remove from '../../../../utils/Remove'
import Button from '../../Button'
import useUpload from './Hooks/useUpload'
import Preview from './Preview'

export type Error = {
    type?:'maxFiles' | 'maxSize'
    rejectedFiles?:File[]
}

type Props = {
    kind?:[
        'Gallery'
    ][number]
    maxFiles:number
    maxSize?:number
    get?:(files : Array<File>, error : Error ) => void
    icon?:React.ReactNode
}

export type InputFile = Props

const Upload = (props:PasStyleProps<InputPropsMethod & Props>) => {
            const {label, maxFiles, accept, id, get, maxSize} = props

            const { sendFile, addFile, useWhoIam_id, fileSize, files, error } = useUpload({
                id:`${id ? id + '-':''}PasStyle-Upload`,
                get,
                maxFiles,
                maxSize,
            })

            React.useEffect(() => {
                if(error.type === 'maxSize'){
                    alert(`Exceeded File Size ${maxSize}`)
                }
                if(error.type === 'maxFiles'){
                    alert(`Exceeded Files ${maxFiles}`)
                }
            }, [error])
            
            return(
                <PasStyle.Div>
                    <Button onClick={sendFile} {...Remove.children(props)}>
                        {label}
                    </Button>
                    {files && files.map((file, i) => 
                        <Preview 
                            key={i}
                            file={file}
                            fileSize={fileSize}
                        />
                    )}
                    <PasStyle.Input 
                        type='file' 
                        multiple={maxFiles === 1 ? false : true}
                        w='0px'
                        onChange={(e) => addFile(e)}
                        id={useWhoIam_id}
                        accept={accept}
                    />
                </PasStyle.Div>
            )
        }

export default Upload