import * as React from 'react'
import PasStyle from '../..'
import { PasStyleProps } from '../../types'
import Color from './Color'
import Default from './Default'
import Label from './Label'

type css = [
    'default'
]

type Props = {
    css?:css[number]
    label?:string
}

const Input = (props:PasStyleProps<Props>) => {

    const { type, label } = props

    const typeVerify = () : boolean => {
        return (
            !type ||
            type === 'text' ||
            type === 'number' ||
            type === 'email' ||
            type === 'password' ||
            type === 'tel' ||
            type === 'url'
        ) 
    }

    return (
        <PasStyle mg='5px'>
            <Label htmlFor={label} {...props}>
                {label}
            </Label>
            {typeVerify() && <Default {...props}/>}
            {type === 'color' && <Color {...props}/>}
        </PasStyle>
    )
}
export default Input