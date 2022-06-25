import * as React from 'react'
import PasStyle from '../../../..'
import { InputPropsMethod } from '../..'

type Arts = [
    'add'
][number]

type CustomArt = {
    Button:{
        Art:'add',
        style:{

        }
    },
    Preview:{
        Art:'Gallery',
        style:{
            
        }
    }
}

export type Get = (files : Array<File>) => void

type Props = {
    Art?:Arts
    maxFiles?:number
    maxSize?:number
    get?:Get
    icon?:React.ReactNode
}

export type InputFile = Props

const Upload = (props:InputPropsMethod & Props) => {

    const { label, maxFiles, accept, id, get, maxSize, value, Art, children } = props

    return(
        <>
             {children}
             <PasStyle.Input 
                type='file' 
                multiple={maxFiles === 1 || !maxFiles ? false : true}
                w='0px'
                id={id}
                accept={accept}
                value={value}
            />
        </>
    )
}
           
export default Upload






/*const { label, maxFiles, accept, id, get, maxSize, value, Art } = props

const { sendFile, addFile, removeFile, useId, files, } = useUpload({
    id:`${id ? id + '-':''}PasStyle-Upload`,
    get,
    maxFiles,
    maxSize,
})

return(
    <>
        <PasStyle.Div>
            <Button Art={Art} onClick={sendFile} {...Remove.children(props)}>
                {label}
            </Button>
            <PasStyle.Div flex>
                {files.map((file, i) => 
                    Preview[Art ?? 'default']({
                        key:i,
                        file,
                        removeFile
                    })
                )}
            </PasStyle.Div>
            <PasStyle.Input 
                type='file' 
                multiple={maxFiles === 1 || !maxFiles ? false : true}
                w='0px'
                onChange={(e) => addFile(e)}
                id={useId}
                accept={accept}
                value={value}
            />
        </PasStyle.Div>
    </>
)
}*/
