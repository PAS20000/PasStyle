import * as React from 'react'
import PasStyle from '../../../..'
import { InputPropsMethod } from '../..'

type Arts = [
    'add'
][number]

export type Get = (files : Array<File>) => void

type Props = {
    Art?:Arts
    maxFiles?:number
    maxSize?:number
    get?:Get
    icon?:React.ReactNode
}

export type InputFile = Props

const Upload = (props:InputPropsMethod & Props) => {

    const { maxFiles, accept, id, value, Art, children } = props

    return(
        <>
             {children}
             <PasStyle.Input 
                type='file' 
                multiple={maxFiles === 1 || !maxFiles ? false : true}
                w='0px'
                id={id}
                accept={accept}
                value={value}
            />
        </>
    )
}
           
export default Upload