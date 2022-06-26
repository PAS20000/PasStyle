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

    React.useEffect(() => {
        document.querySelector('.BB').setAttribute('style', 'background:red;border-radius:8px;padding:10px;')
        document.querySelector('.BB').removeAttribute('style')
    }, [])

    return(
        <>
            <Input.Upload maxFiles={maxFiles ?? 3} get={(files) => {
                setFile(files)
            }}>
                <Button.Upload>
                    Upload
                </Button.Upload>
                <Preview.Gallery files={files}/>
                <Controls.Generic files={files}/>
            </Input.Upload>
            <button className='BB' onClick={() => console.log(files)}>Send</button>
        </>
    )
}