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

    const { label, maxFiles, accept, id, get, maxSize, value, children, Art } = props

    //const arrayChildren = React.Children.toArray(children)

    const { addFile, sendFile, removeFile, inputClass } = useUpload({
        id:'PasStyle.input.File',
        get,
        maxFiles,
        maxSize,
    })

    const { GET } = useMethods()

    const Listener = () => {
        const btns = GET.class({ father:'button', kid:'upload' }).queryAll
        btns.map((b, i) => b.onclick = (e) => sendFile(e , i))
    }

    React.useEffect(() => {
        Listener()
    }, [])

    return(
        <Create.Container>
            {children}
            <PasStyle.Input 
                type='file' 
                multiple={maxFiles === 1 || !maxFiles ? false : true}
                w='0px'
                onChange={(e) => addFile(e)}
                className={inputClass}
                accept={accept}
                value={value}
            />
        </Create.Container>
    )
}
           
export default Upload