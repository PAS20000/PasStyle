import * as React from 'react'
import Button from "../../src/Components/Button"
import Input from "../../src/Components/Input"
import Controls from '../../src/Components/Input/Components/Upload/Components/Controls'
import Preview from '../../src/Components/Input/Components/Upload/Components/Preview'

type Props = {
    Type?:string
    maxFiles?:number
}

export default function Upload ({
    Type,
    maxFiles
} : Props) {

    const [files, setFile] = React.useState<File[]>([])

    console.log(files)

    return(
        <>
            <Input.Upload maxFiles={maxFiles ?? 3} get={(fs) => {
               setFile(fs)
            }}>
                <Button.Upload>
                    Upload
                </Button.Upload>
                <Preview.Gallery files={files}/>
                <Controls.Generic files={files}/>
            </Input.Upload>
        </>
    )
}