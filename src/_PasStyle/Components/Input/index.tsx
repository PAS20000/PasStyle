import * as React from 'react'
import PasStyle from '../..'
import { PasStyleProps } from '../../types'
import Color from './Color'
import Default from './Default'

type css = [
    'default'
]

type Props = {
    css?:css[number]
}

const Input = (props:PasStyleProps<Props>) => {

    const { type } = props

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
        <>
            {typeVerify() && <Default {...props}/>}
            {type === 'color' && <Color {...props}/>}
        </>
    )
}
export default Input