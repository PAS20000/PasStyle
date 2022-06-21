import * as React from 'react'
import useWhoIam from '../../../../../Hooks/useWhoIam'

type Props = {
    change?:(files : Array<File>) => void
    id:string
    maxFiles?:number
}

const useUpload = ({
    change,
    id,
    maxFiles
} : Props) => {
    
    const { random } = useWhoIam(id)
    const [files, setFiles] = React.useState<Array<File>>([])

    React.useEffect(() => {
        change(files)
    }, [files])

    const Action = {
        sendFile() {
            document.getElementById(random).click()
        },
        addFile(e : any) {
            change(files)
            const ArrayFiles : Array<File> = Array.from(e.target.files)
            if(maxFiles){
                if(maxFiles === 1){
                    setFiles(ArrayFiles)
                }
                if(ArrayFiles.length > maxFiles || files.length > maxFiles && maxFiles !== 1){
                    setFiles(ArrayFiles.splice(0, maxFiles))
                    return alert(`Exceeded Files ${maxFiles}`)
                }
                setFiles(prev => prev.length < maxFiles ? 
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
        fileSize(file : File){

            const { size } = file

            const typeSize = {
                kb(FileSize : number){
                    const convert = FileSize / 1024

                    return {
                        string:`${convert.toFixed(2)}KB`,
                        isKB:convert < 1024,
                    }
                },
                mb(FileSize : number){
                    const convert = FileSize / 1024 / 1024

                    return {
                        string:`${convert.toFixed(2)}MB`,
                        isMB:convert < 1024,
                    }
                },
                gb(FileSize : number){
                    const convert = FileSize / 1024 / 1024 / 1024

                    return {
                        string:`${convert.toFixed(2)}GB`,
                        isGB:convert < 1024,
                    }
                }
            }

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
    }

    return {
        Action,
        sendFile:Action.sendFile,
        addFile:Action.addFile,
        removeFile:Action.removeFile,
        fileSize:Action.fileSize,
        files,
        setFiles,
        useWhoIam_id:random,
    }
}

export default useUpload