import * as React from 'react'
import useWhoIam from '../../../../../Hooks/useWhoIam'

type Props = {
    getFiles?:(files : Array<File>) => void
    id:string
    maxFiles?:number
    maxSize?:number
}

const useUpload = ({
    getFiles,
    id,
    maxFiles,
    maxSize
} : Props) => {
    
    const { random } = useWhoIam(id)
    const [files, setFiles] = React.useState<Array<File>>([])
    const [error, setError] = React.useState<'maxFiles' | 'maxSize'>()

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
            if(maxSize){
                const filter = ArrayFiles.filter(file => typeSize.kb(file.size).size < maxSize)
                const existMaxSize = ArrayFiles.filter(file => typeSize.kb(file.size).size > maxSize)

                setFiles(filter)

                if(existMaxSize[0]){
                    alert(`Exceeded File Size ${maxSize}`)
                }
            }
            if(maxFiles){
                if(maxFiles === 1){
                    setFiles(ArrayFiles)
                }
                if(ArrayFiles.length > maxFiles && maxFiles !== 1){
                    setFiles(ArrayFiles.splice(0, maxFiles))
                    alert(`Exceeded Files ${maxFiles}`)
                } 
                const ExceededFiles = (prev : File[]) : boolean => {
                    if(prev.length >= maxFiles){
                        maxFiles !== 1 && alert(`Exceeded Files ${maxFiles}`)
                        return true
                    } else {
                        return false
                    }
                }
                setFiles(prev => !ExceededFiles(prev) ? 
                    [...prev].concat(ArrayFiles) 
                    : 
                    [...prev].slice(0 , maxFiles)
                )
               
            } else {
                setFiles(prev => [...prev].concat(ArrayFiles))
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
    }
}

export default useUpload