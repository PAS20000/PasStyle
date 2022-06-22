import * as React from 'react'
import { Error, Get } from '../..'
import useWhoIam from '../../../../../Hooks/useWhoIam'

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
    
    const { hash } = useWhoIam(id)
    const [files, setFiles] = React.useState<Array<File>>([])
    const [error, setError] = React.useState<Error>({})

    const GetInit = () => {
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
        GetInit()
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
            GetInit()
            const maxItems = maxFiles ?? 1
            const maxSizeFile = maxSize ?? 1024 * 1000
            const ArrayFiles : Array<File> = Array.from(e.target.files)

            const rejectedFiles = ArrayFiles.filter((f, i) => typeSize.kb(f.size).size > maxSizeFile || i > maxItems )

            const approvedFiles = ArrayFiles.filter((f, i) => typeSize.kb(f.size).size < maxSizeFile && i <= maxItems )
            

            setFiles(approvedFiles)

            setError({
                exist:!!rejectedFiles,
                rejectedFiles
            })

            /*const rejectMaxSize = ArrayFiles.filter(f => typeSize.kb(f.size).size > maxSize)
            const filterMaxSize = ArrayFiles.filter(f => typeSize.kb(f.size).size < maxSize)
            if(maxSize){
                if(rejectMaxSize[0]){
                    setError({
                        type:'maxSize',
                        rejectedFiles:rejectMaxSize,
                    })
                }
                if(maxItems === 1){
                    return setFiles(prev => filterMaxSize[0] ? filterMaxSize:prev)
                }
            }
            if(maxItems === 1){
                setFiles(prev => filterMaxSize[0] ? filterMaxSize:prev)
            }
            if(maxItems){
                if(ArrayFiles.length > maxItems && maxItems !== 1){
                    setFiles(filterMaxSize.splice(0, maxItems))
                    setError({
                        type:'maxFiles',
                        rejectedFiles:rejectMaxSize,
                    })
                } 
                const ExceededFiles = (prev : File[]) : boolean => {
                    if(prev.length >= maxItems){
                        maxItems !== 1 &&  setError({
                            type:'maxFiles',
                            rejectedFiles:rejectMaxSize,
                        })
                        return true
                    } else {
                        return false
                    }
                }
                setFiles(prev => ExceededFiles(prev) ? 
                    [...prev].splice(0 , maxItems)
                    : 
                    [...prev].concat(filterMaxSize) 
                )
               
            }*/
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