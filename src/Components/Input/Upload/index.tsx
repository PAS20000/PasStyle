import * as React from 'react'
import { InputPropsMethod } from '..'
import PasStyle, { PasStyleProps } from '../../..'
import Remove from '../../../../utils/Remove'
import usePopup from '../../../Hooks/usePopup'
import Alert from '../../Alert'
import Button from '../../Button'
import useUpload from './Hooks/useUpload'
import Preview from './Preview'

export type Error = {
    exist?:boolean
    rejectedFiles?:File[]
}

export type Get = (files : Array<File>, error : Error & {reset : () => void }) => void

type Props = {
    kind?:[
        'gallery'
    ][number]
    maxFiles?:number
    maxSize?:number
    get?:Get
    icon?:React.ReactNode
}

export type InputFile = Props

const Upload = (props:PasStyleProps<InputPropsMethod & Props>) => {

            const {label, maxFiles, accept, id, get, maxSize, value, kind} = props

            const { sendFile, addFile, removeFile, useWhoIam_id, files, } = useUpload({
                id:`${id ? id + '-':''}PasStyle-Upload`,
                get,
                maxFiles,
                maxSize,
            })

            return(
                <PasStyle.Div>
                    <Button onClick={sendFile} {...Remove.children(props)}>
                        {label}
                    </Button>
                    {files && files.map((file, i) => 
                        Preview[kind ?? 'default']({
                            key:i,
                            file,
                            removeFile
                        })
                    )}
                    <PasStyle.Input 
                        type='file' 
                        multiple={maxFiles === 1 || !maxFiles ? false : true}
                        w='0px'
                        onChange={(e) => addFile(e)}
                        id={useWhoIam_id}
                        accept={accept}
                        value={value}
                    />
                </PasStyle.Div>
            )
        }

export default Upload