import * as React from 'react'
import PasStyle from '../../../..'
import { InputPropsMethod } from '../..'
import useUpload from './Hooks/useUpload'
import Create from '../../../Create'
import useGeneration from '../../../../Hooks/useGeneration'

type Arts = [
    'add'
][number]

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

    const { label, maxFiles, accept, id, get, maxSize, value, children, Art } = props

    //const arrayChildren = React.Children.toArray(children)

    const { addFile, sendFile, removeFile, files, inputId } = useUpload({
        id:'PasStyle.input.File',
        get,
        maxFiles,
        maxSize,
    })
    //const { hash } = useId('Input.File.Div')

    const { GET } = useGeneration()

    const Listener = () => {
       console.log(Array.from(document.querySelectorAll(GET.class({ father:'button', kid:'upload' }))))
    }

    return(
        <Create.Container Listener={Listener}>
            {children}
            <PasStyle.Input 
                type='file' 
                multiple={maxFiles === 1 || !maxFiles ? false : true}
                w='0px'
                onChange={(e) => addFile(e)}
                className='PasStyle Input Upload'
                accept={accept}
                value={value}
            />
        </Create.Container>
    )
}
           
export default Upload