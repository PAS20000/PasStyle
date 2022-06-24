import * as React from 'react'
import Button from "../../src/Components/Button"
import Input from "../../src/Components/Input"
import Preview from "../../src/Components/Input/Components/Upload/Components/Preview"

export default function Upload () {

    const [files, setFile] = React.useState<File[]>()
    
    return(
        <>
            <Input.File maxFiles={8} get={(files, error) => {
                setFile(files)
            }}>
                <Button.Upload>
                    Upload
                </Button.Upload>
                <Preview.Generic files={files}/>
            </Input.File>
        </>
    )
}