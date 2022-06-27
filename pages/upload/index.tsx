import * as React from 'react'
import Button from "../../src/Components/Button"
import Input from "../../src/Components/Input"
import Controls from '../../src/Components/Input/Components/Upload/Components/Controls'
import Preview from '../../src/Components/Input/Components/Upload/Components/Preview'

type Props = {
    kind?:string
    maxFiles?:number
    maxSize?:number
}

export default function Upload ({
    kind,
    maxFiles,
    maxSize
} : Props) {

    const [files, setFile] = React.useState<File[]>([])

    React.useEffect(() => {
        console.log(files)
    }, [])

    return(
        <>
            <Input.Upload maxFiles={maxFiles ?? 3} maxSize={maxSize} get={(fs) => {
               setFile(fs)
            }}>
                <Button.Upload>
                    Upload
                </Button.Upload>
                {Preview[kind ?? 'Generic']({
                    files:files,
                })}
                <Controls.Generic files={files}/>
            </Input.Upload>
        </>
    )
}