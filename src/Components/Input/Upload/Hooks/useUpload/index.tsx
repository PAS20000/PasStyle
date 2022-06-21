import * as React from 'react'
import { Error } from '../..'
import useWhoIam from '../../../../../Hooks/useWhoIam'

type Props = {
    get?:(files : Array<File>, error : Error) => void
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
    
    const { hash } = useWhoIam(id)
    const [files, setFiles] = React.useState<Array<File>>([])
    const [error, setError] = React.useState<Error>({})

    React.useEffect(() => {
        if(get){
            get(files, error)
        }
    }, [files, error])

    const typeSize = {
        kb(FileSize : number){
            const convert = FileSize / 1024

            return {
                string:`${convert.toFixed(2)}*KB`,
                isKB:convert < 1024,
                size:convert
            }
        },
        mb(FileSize : number){
            const convert = FileSize / 1024 / 1024

            return {
                string:`${convert.toFixed(2)}*MB`,
                isMB:convert < 1024,
                size:convert
            }
        },
        gb(FileSize : number){
            const convert = FileSize / 1024 / 1024 / 1024

            return {
                string:`${convert.toFixed(2)}*GB`,
                isGB:convert < 1024,
                size:convert
            }
        }
    }

    const fileSize = (file : File) => {

        const { size } = file

        if(typeSize.kb(size).isKB){
            return typeSize.kb(size).string
        }
        if(typeSize.mb(size).isMB){
            return typeSize.mb(size).string
        }
        if(typeSize.gb(size).isGB){
            return typeSize.gb(size).string
        }
    }

    const Action = {
        sendFile() {
            document.getElementById(hash).click()
        },
        addFile(e : any) {
            if(get){
                get(files, error)
            }
            const ArrayFiles : Array<File> = Array.from(e.target.files) 
            const filterMaxSize = ArrayFiles.filter(file => typeSize.kb(file.size).size < maxSize)
            const existMaxSize = ArrayFiles.filter(file => typeSize.kb(file.size).size > maxSize)

            if(maxSize){
                if(existMaxSize[0]){
                    setError({
                        type:'maxSize',
                        rejectedFiles:existMaxSize,
                    })
                    if(maxFiles === 1){
                        return setFiles(files)
                    }
                }
            }
            if(maxFiles === 1 || !maxFiles){
                setFiles(files)
            }
            if(maxFiles){
                if(ArrayFiles.length > maxFiles && maxFiles !== 1){
                    setFiles(filterMaxSize.splice(0, maxFiles))
                    setError({
                        type:'maxFiles',
                        rejectedFiles:existMaxSize,
                    })
                } 
                const ExceededFiles = (prev : File[]) : boolean => {
                    if(prev.length >= maxFiles){
                        maxFiles !== 1 &&  setError({
                            type:'maxFiles',
                            rejectedFiles:existMaxSize,
                        })
                        return true
                    } else {
                        return false
                    }
                }
                setFiles(prev => ExceededFiles(prev) ? 
                    [...prev].splice(0 , maxFiles)
                    : 
                    [...prev].concat(filterMaxSize) 
                )
               
            }
        },
        removeFile(index:number){
            setFiles(prev => prev.filter((f , i) => f && i !== index))
        },
    }

    return {
        Action,
        sendFile:Action.sendFile,
        addFile:Action.addFile,
        removeFile:Action.removeFile,
        fileSize,
        files,
        setFiles,
        useWhoIam_id:hash,
        error,
    }
}

export default useUpload