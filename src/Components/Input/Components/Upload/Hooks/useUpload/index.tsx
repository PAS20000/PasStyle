import * as React from 'react'
import { Error, Get } from '../..'
import useId from '../../../../../../Hooks/useId'
import useFileSize from '../useFileSize'

type Props = {
    get?:Get
    id:string
    maxFiles?:number
    maxSize?:number
}

const useUpload = ({
    get,
    id,
    maxFiles,
    maxSize
} : Props) => {
    
    const { hash } = useId(id)
    const { typeSize } = useFileSize()
    const [files, setFiles] = React.useState<Array<File>>([])
    const [error, setError] = React.useState<Error>({})

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

    const Action = {
        sendFile() {
            document.getElementById(hash).click()
        },
        addFile(e : any) {
            Methods()
            const maxItems = maxFiles ?? 1
            const maxSizeFile = maxSize ?? 10 * 1000 * 1000 // 10gb
            const ArrayFiles : Array<File> = Array.from(e.target.files)
            const rejectedFiles = ArrayFiles.filter((f, i) => typeSize.kb(f.size).size > maxSizeFile || i > maxItems )
            const approvedFiles = ArrayFiles.filter((f, i) => typeSize.kb(f.size).size < maxSizeFile && i < maxItems )
            
            setFiles(prev => prev.length < maxItems ? prev.concat(approvedFiles) : approvedFiles )

            setError({
                exist:!!rejectedFiles.length,
                rejectedFiles
            })
        },
        removeFile(index:number){
            setFiles(prev => prev.filter((f , i) => f && i !== index))
        }
    }

    return {
        Action,
        sendFile:Action.sendFile,
        addFile:Action.addFile,
        removeFile:Action.removeFile,
        files,
        setFiles,
        useId:hash,
        error,
    }
}

export default useUpload