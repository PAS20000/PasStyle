import * as React from 'react'
import Preview from '../../Components/Input/Components/Upload/Components/Preview'

const useCreateComponent = () => {
    
    const Component = {  
        Preview(props) : JSX.Element{
            const { Type, files } = props
            return Preview[Type ?? 'Generic']({...props})
        },
    }

    return Component
}

export default useCreateComponent