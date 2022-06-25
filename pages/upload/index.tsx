import * as React from 'react'
import Button from "../../src/Components/Button"
import Input from "../../src/Components/Input"
import Preview from "../../src/Components/Input/Components/Upload/Components/Preview"
import useCreateComponent from '../../src/Hooks/useCreateComponent'

type Props = {
    Type?:string
    maxFiles?:number
}

export default function Upload ({
    Type,
    maxFiles
} : Props) {

    const [files, setFile] = React.useState<File[]>([])

    const Component = useCreateComponent()

    return(
        <>
            <Input.File maxFiles={maxFiles ?? 3} get={(files) => {
                setFile(files)
            }}>
                <Button.Upload>
                    Upload
                </Button.Upload>
                <Component.Preview Type={Type} files={files}/>
            </Input.File>
            <button onClick={() => console.log(files)}>Send</button>
        </>
    )
}