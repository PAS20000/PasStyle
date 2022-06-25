import * as React from 'react'
import * as ReactDOM from 'react-dom'
import PasStyle from '../..'
import useGeneration from '../../Hooks/useGeneration'

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

        const { POST } = useGeneration()

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

        const { GET } = useGeneration()

        const TargetID = GET.id(targetId)

        React.useEffect(() => {
            setDoc(document.querySelector(TargetID ?? GET.id('portal')) as HTMLElement)
        }, [])

        if(doc){
            return ReactDOM.createPortal(
                <>{children}</>, 
                document.querySelector(TargetID ?? GET.id('portal'))
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