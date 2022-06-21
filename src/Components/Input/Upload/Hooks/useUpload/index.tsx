import * as React from 'react'
import useWhoIam from '../../../../../Hooks/useWhoIam'

type Props = {
    getFiles?:(files : Array<File>) => void
    id:string
    maxFiles?:number
    maxSize?:number
}

type Error = {
    type?:'maxFiles' | 'maxSize'
    files?:File[]
}

const useUpload = ({
    getFiles,
    id,
    maxFiles,
    maxSize
} : Props) => {
    
    const { random } = useWhoIam(id)
    const [files, setFiles] = React.useState<Array<File>>([])
    const [error, setError] = React.useState<Error>({})

    React.useEffect(() => {
        if(getFiles){
            getFiles(files)
        }
    }, [files])

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
            document.getElementById(random).click()
        },
        addFile(e : any) {
            if(getFiles){
                getFiles(files)
            }
            const ArrayFiles : Array<File> = Array.from(e.target.files) 
            const filterMaxSize = ArrayFiles.filter(file => typeSize.kb(file.size).size < maxSize)
            const existMaxSize = ArrayFiles.filter(file => typeSize.kb(file.size).size > maxSize)

            if(maxSize){
                if(existMaxSize[0]){
                    setError({
                        type:'maxSize',
                        files: existMaxSize,
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
                    setFiles(filterMaxSize.slice(0, maxFiles))
                    setError({
                        type:'maxFiles',
                        files:ArrayFiles
                    })
                } 
                const ExceededFiles = (prev : File[]) : boolean => {
                    if(prev.length >= maxFiles){
                        maxFiles !== 1 && setError({
                            type:'maxFiles',
                            files:ArrayFiles
                        })
                        return true
                    } else {
                        return false
                    }
                }
                setFiles(prev => ExceededFiles(prev) ? 
                    [...prev].slice(0 , maxFiles)
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
        useWhoIam_id:random,
        error,
    }
}

export default useUpload