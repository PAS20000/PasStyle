import * as React from 'react'

const useGet = () => {

    const [files, setFiles] = React.useState<File[]>([])

    const StateFiles = [files, setFiles]

    return {
        files,
        setFiles,
        StateFiles
    }
}

export default useGet