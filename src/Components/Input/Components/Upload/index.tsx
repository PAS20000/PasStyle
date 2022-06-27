import * as React from 'react'
import PasStyle from '../../../..'
import { InputPropsMethod } from '../..'
import useUpload from './Hooks/useUpload'
import Create from '../../../Create'
import useMethods from '../../../../Hooks/useMethods'

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

    const { maxFiles, accept, get, maxSize, value, children } = props

    //const arrayChildren = React.Children.toArray(children)

    const { addFile, sendFile, removeFile, files } = useUpload({
        id:'PasStyle.input.File',
        get,
        maxFiles,
        maxSize,
    })

    const { GET, POST } = useMethods()

    const Listener = () => {
        const btns = GET.PasStyle('button', 'upload').queryAll
        btns.map((b, i) => b.onclick = (e) => sendFile(e , i))
    }

    React.useEffect(() => {
        Listener()
    }, [])

    POST.PasStyle('input', 'upload', 'input')

    return(
        <Create.Container>
            {children}
            <PasStyle.Input 
                type='file' 
                multiple={maxFiles === 1 || !maxFiles ? false : true}
                w='0px'
                onChange={(e) => addFile(e)}
                accept={accept}
                value=''
            />
        </Create.Container>
    )
}
           
export default Upload