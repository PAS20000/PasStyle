import * as React from 'react'
import PasStyle from '../../..'
import { PasStyleProps } from '../../../../utils/types'
import useWhoIam from '../../../Hooks/useWhoIam'
import Button from '../../Button'

type Props = {
    label?:string
    multiple?:boolean
}

const File = {
    Single(props:PasStyleProps<Props>) {
        const { random } = useWhoIam('PasStyle-Upload-Single')

        const [file, setFile] = React.useState<File>()

        const {onChange, label} = props

        const Action = {
            sendFile() {
                document.getElementById(random).click()
            },
            changeFile(e : any) {
                onChange &&  onChange(e)
                setFile(e.target.files[0])
            },
            fileSize(){
                const kb = `${(file.size / 1024).toFixed(2)}KB`
                const mb = `${(file.size / 1024 / 1024).toFixed(2)}MB`
                const gb = `${(file.size / 1024 / 1024 / 1024).toFixed(2)}GB`

                if((file.size / 1024 < 1024)){
                    return kb
                }
                if((file.size / 1024 / 1024 < 1024)){
                    return mb
                }
                if((file.size / 1024 / 1024 / 1024 < 1024)){
                    return gb
                }
            }
        }
        return(
            <PasStyle.Div>
                <Button.Default onClick={Action.sendFile}>
                    {label}
                </Button.Default>
                {file &&
                    <PasStyle.Div>
                        <PasStyle.Img src={URL.createObjectURL(file)}
                            w='50px'
                            h='50px'
                        />
                        <PasStyle.Span>
                            {file.name}-{Action.fileSize()}
                        </PasStyle.Span>
                    </PasStyle.Div>
                }
                <PasStyle.Input 
                    type='file' 
                    w='0px'
                    onChange={(e) => Action.changeFile(e)}
                    id={random}
                />
            </PasStyle.Div>
        )
    },
    Multiple(props:PasStyleProps<Props>) {
            const { random } = useWhoIam('PasStyle-Upload-Multiple')

            const [files, setFiles] = React.useState<Array<File>>([])
    
            const {onChange, label} = props
    
            const Action = {
                sendFile() {
                    document.getElementById(random).click()
                },
                changeFile(e : any) {
                    onChange && onChange(e)
                    setFiles(prev => [...prev].concat(Array.from(e.target.files)))
                },
                removeFile(index:number){
                    setFiles(prev => prev.filter((f , i, a) => i !== index))
                },
                fileSize(file : File){
                    const kb = `${(file.size / 1024).toFixed(2)}KB`
                    const mb = `${(file.size / 1024 / 1024).toFixed(2)}MB`
                    const gb = `${(file.size / 1024 / 1024 / 1024).toFixed(2)}GB`
    
                    if((file.size / 1024 < 1024)){
                        return kb
                    }
                    if((file.size / 1024 / 1024 < 1024)){
                        return mb
                    }
                    if((file.size / 1024 / 1024 / 1024 < 1024)){
                        return gb
                    }
                }
            }

            console.info(files)
            return(
                <PasStyle.Div>
                    <Button.Default onClick={Action.sendFile}>
                        {label}
                    </Button.Default>
                    {files && files.map(file => 
                        <PasStyle.Div key={file.name}>
                            <PasStyle.Img src={URL.createObjectURL(file)}
                                w='50px'
                                h='50px'
                            />
                            <PasStyle.Span>
                                {file.name}-{Action.fileSize(file)}
                            </PasStyle.Span>
                        </PasStyle.Div>
                    )}
                    <PasStyle.Input 
                        type='file' 
                        multiple
                        w='0px'
                        onChange={(e) => Action.changeFile(e)}
                        id={random}
                    />
                </PasStyle.Div>
            )
        },
    }

export default File