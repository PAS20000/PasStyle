import * as React from 'react'
import * as ReactDOM from 'react-dom'
import PasStyle from '../..'
import useWhoIam from '../../Hooks/useWhoIam'

type Props = {
    children:React.ReactNode
    error?:string
}

const CreatePortal = ({
    children,
    error
}: Props) => {
    const { hash } = useWhoIam('Error')
    const [doc, setDoc] = React.useState<HTMLElement>()

    React.useEffect(() => {
        setDoc(document.getElementById('PasStyle-Portal') as HTMLElement)
    }, [])

    if(doc){
        return ReactDOM.createPortal(
            <>{children}</>, 
            document.getElementById('PasStyle-Portal')
        )
    } else {
        return(
            <PasStyle.Span id={hash}>
                {error ?? 'Not Found'}
            </PasStyle.Span>
        )
    }
}

export default CreatePortal