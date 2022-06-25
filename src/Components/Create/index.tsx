import * as React from 'react'
import * as ReactDOM from 'react-dom'
import PasStyle from '../..'
import useMethods from '../../Hooks/useMethods'

type Props = {
    error?:string
    targetId?:string
}

type GenericProps = {
    items:Array<File>
    Listener?:Function
}

type ReactChildren<T = {}> = T & {
    children:React.ReactNode
}

const Create = {
    Generic({
        items,
        children,
    } : ReactChildren<GenericProps>){

        if(!!items){
            return(
                <>
                    {children}
                </>
            )
        } else {
            return<></>
        }
    },
    Container({
        children,
        Listener
    } : ReactChildren<{error?:string, id?:string, Listener?:Function}>){

        const { POST } = useMethods()

        React.useEffect(() => {
            if(Listener){
                Listener()
            }
        }, [Listener])

        return (
            <PasStyle.Div className={POST.class({father:'create', kid:'container'})}>
              {children}
            </PasStyle.Div>
        )
    },
    Portal({
        children,
        error,
        targetId
    } : ReactChildren<Props>) {
        const [doc, setDoc] = React.useState<HTMLElement>()

        const { GET } = useMethods()

        React.useEffect(() => {
            setDoc(GET.id('portal').query as HTMLElement)
        }, [])

        if(doc){
            return ReactDOM.createPortal(
                <>{children}</>, 
                GET.id('portal').query
            )
        } else {
            return(
                <PasStyle.Span>
                    {error ?? 'Not Found'}
                </PasStyle.Span>
            )
        }
    },
    Render({
        children,
        error,
        targetId
    } : ReactChildren<Props>){
        const [doc, setDoc] = React.useState<HTMLElement>()

        React.useEffect(() => {
            setDoc(document.getElementById(targetId ?? '__next') as HTMLElement)
        }, [])

        if(doc){
            ReactDOM.render(
                <>{children}</>, 
                document.getElementById(targetId ?? '__next')
            )

            return<></>
        } else {
            return(
                <PasStyle.Span>
                    {error ?? 'Not Found'}
                </PasStyle.Span>
            )
        }
    },
}

export default Create