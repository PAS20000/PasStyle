import * as React from 'react'
import * as ReactDOM from 'react-dom'
import PasStyle from '../..'
import useId from '../../Hooks/useId'

type Props = {
    children:React.ReactNode
    error?:string
    targetId?:string
}

type PreviewProps = {
    files:File[]
    children:React.ReactNode
}

const Create = {
    Portal({
        children,
        error,
        targetId
    }: Props) {
        const { hash } = useId('PasStyle-CreatePortal-Error')
        const [doc, setDoc] = React.useState<HTMLElement>()

        React.useEffect(() => {
            setDoc(document.getElementById('PasStyle-Portal') as HTMLElement)
        }, [])

        if(doc){
            return ReactDOM.createPortal(
                <>{children}</>, 
                document.getElementById(targetId ?? 'PasStyle-Portal')
            )
        } else {
            return(
                <PasStyle.Span id={hash}>
                    {error ?? 'Not Found'}
                </PasStyle.Span>
            )
        }
    },
    Preview({
        files,
        children
    } : PreviewProps){

        if(!!files){
            return(
                <>
                    {children}
                </>
            )
        } else {
            return<></>
        }
    }
}

export default Create