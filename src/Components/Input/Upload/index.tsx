import * as React from 'react'
import PasStyle, { PasStyleProps } from '../../..'
import Button from '../../Button'
import useUpload from './Hooks/useUpload'

type Props = {
    label?:string
    maxFiles?:number
    getFiles?:(files : Array<File>) => void
}

export type InputFile = Props

const Upload = (props:PasStyleProps<Props>) => {
            const {label, maxFiles, accept, id, getFiles} = props

            const { Action, useWhoIam_id, files } = useUpload({
                id:`${id ? id + '-':''}PasStyle-Upload`,
                getFiles,
                maxFiles,
            })
            
            return(
                <PasStyle.Div>
                    <Button onClick={Action.sendFile}>
                        {label}
                    </Button>
                    {files && files.map((file, i) => 
                        <PasStyle.Div key={file.name + i}>
                            <PasStyle.Img src={URL.createObjectURL(file)}
                                w='50px'
                                h='50px'
                            />
                            <PasStyle.Span>
                                {file.name}-{Action.fileSize(file)}
                            </PasStyle.Span>
                        </PasStyle.Div>
                    )}
                    <PasStyle.Input 
                        type='file' 
                        multiple={maxFiles === 1 ? false : true}
                        w='0px'
                        onChange={(e) => Action.addFile(e)}
                        id={useWhoIam_id}
                        accept={accept}
                    />
                </PasStyle.Div>
            )
        }

export default Upload