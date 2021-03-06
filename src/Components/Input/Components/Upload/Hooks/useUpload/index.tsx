import * as React from 'react'
import { Get } from '../..'
import useMethods from '../../../../../../Hooks/useMethods'
import useFileSize from '../useFileSize'

type Props = {
    get?:Get
    id?:string
    maxFiles?:number
    maxSize?:number
}

const useUpload = ({
    get,
    id,
    maxFiles,
    maxSize
} : Props) => {
    
    const { GET } = useMethods()
    const { typeSize } = useFileSize()
    const [files, setFiles] = React.useState<Array<File>>([])

    const maxItems = maxFiles ?? 1
    const maxSizeFile = maxSize ?? 10 * 1000 * 1000 // 10gb

    const setFileConditions = (currentFiles:File[], receivedFiles:File[]) => {

        const FilterFiles = (f:File, i:number, array:Array<File>) => {

            const create = {
                status(obj : {maxSize?:string, maxFiles?:string}){
                    array.map(file => file['status'] = obj)
                },
            }

            if(typeSize.kb(f.size).size < maxSizeFile){
                create.status({
                    ...f['status'], 
                    maxSize:'approved',
                })
            } else {
                create.status({
                    ...f['status'], 
                    maxSize:'rejected',
                })
            }
            if(currentFiles.length < maxItems){
               create.status({
                    ...f['status'], 
                    maxFiles:'approved',
                })
            } else {
                create.status({
                    ...f['status'], 
                    maxFiles:'rejected',
                })
            }

            return array
        }

        const ApprovedFiles = receivedFiles.filter((f, i ,a)  => FilterFiles(f, i, a))

        if(currentFiles.length){
            return currentFiles.concat(ApprovedFiles)
        } else {
            return ApprovedFiles
        }
    }

    const Methods = () =>{
        if(get){
            get(files)
        }
    }

    React.useEffect(() => {
        Methods()
    }, [files])

    const Action = {
        sendFile(e : MouseEvent, index : number) {
            if(e.isTrusted){
                const inputs = GET.PasStyle('input', 'upload').queryAll
                inputs[index].click()
            }
        },
        addFile(e : any) {
            Methods()
            const ArrayFiles = Array.from(e.target.files).filter((f, i) => f && i < maxItems) as Array<File>
            setFiles(currentFiles => setFileConditions(currentFiles, ArrayFiles))
        },
        removeFile(index:number){
            setFiles(currentFiles => currentFiles.filter((f , i) => f && i !== index))
        }
    }

    return {
        Action,
        sendFile:Action.sendFile,
        addFile:Action.addFile,
        removeFile:Action.removeFile,
        files,
        setFiles
    }
}

export default useUpload