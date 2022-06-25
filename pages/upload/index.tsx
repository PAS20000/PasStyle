import * as React from 'react'
import Button from "../../src/Components/Button"
import Input from "../../src/Components/Input"
import Controls from '../../src/Components/Input/Components/Upload/Components/Controls'
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

    const { Preview } = useCreateComponent()

    return(
        <>
            <Input.Upload maxFiles={maxFiles ?? 3} get={(files) => {
                setFile(files)
            }}>
                <Button.Upload>
                    Upload
                </Button.Upload>
                <Preview Type={Type} files={files}/>
                <Controls.Generic files={files}/>
            </Input.Upload>
            <button onClick={() => console.log(files)}>Send</button>
        </>
    )
}