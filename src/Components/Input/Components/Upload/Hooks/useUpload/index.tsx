import * as React from 'react'
import { Error, Get } from '../..'
import useId from '../../../../../../Hooks/useId'
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
    
    const { "hash":InputHash } = useId(id)
    const { typeSize } = useFileSize()
    const [files, setFiles] = React.useState<Array<File>>([])
    const [error, setError] = React.useState<Error>({})

    const Action = {
        sendFile() {
            if(InputHash){
                const input = document.getElementById(InputHash) as HTMLElement 
                input.click()
            }
        },
        addFile(e : any) {
            Methods()
            const maxItems = maxFiles ?? 1
            const maxSizeFile = maxSize ?? 10 * 1000 * 1000 // 10gb
            const ArrayFiles : Array<File> = Array.from(e.target.files)

            const setFileConditions = (currentFiles : File[]) => {

                const FilterFiles = (f:File, i:number, array:Array<File>) => {

                    const create = {
                        status(obj : {maxSize?:string, maxFiles?:string}){
                            array.map(file => file['status'] = obj)
                        }
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
                    if(i > maxItems){
                        array.splice(0, maxItems)
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

                if(currentFiles.length){
                    return currentFiles.concat(ArrayFiles.filter((f, i ,a) => FilterFiles(f, i, a)))
                } else {
                    return ArrayFiles.filter((f, i ,a) => FilterFiles(f, i, a))
                }
            }

            setFiles(currentFiles => setFileConditions(currentFiles))
        },
        removeFile(index:number){
            setFiles(currentFiles => currentFiles.filter((f , i) => f && i !== index))
        }
    }

    const Methods = () => {
        if(get){
            get(files, {
                ...error,
                reset() {
                    setError({})
                },
            })
        }
    }

    React.useEffect(() => {
        Methods()
    }, [files, error])

    return {
        Action,
        sendFile:Action.sendFile,
        addFile:Action.addFile,
        removeFile:Action.removeFile,
        files,
        setFiles,
        inputId:InputHash,
        error,
    }
}

export default useUpload