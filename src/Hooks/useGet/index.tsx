import * as React from 'react'
import { Error } from '../../Components/Input/Components/Upload'

const useGet = () => {

    const [files, setFiles] = React.useState<File[]>([])
    const [error, setError] = React.useState<Error>({})

    const StateFiles = [files, setFiles]
    const StateError = [error, setError]

    return {
        files,
        setFiles,
        error,
        setError,
        StateError,
        StateFiles
    }
}

export default useGet