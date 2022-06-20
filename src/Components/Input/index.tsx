import * as React from 'react'
import PasStyle from '../..'
import { PasStyleProps } from '../../../utils/types'
import Color from './Color'
import Default from './Default'
import Label from './Label'

type Kind = [
    'default'
]

type Props = {
    kind?:Kind[number]
    label?:string
}

const Input = {
    Text(props:PasStyleProps<Props>) {

        const {label} = props

        return(
            <PasStyle.Div mg='5px'>
                <Label htmlFor={label} {...props}>
                    {label}
                </Label>
                <Default {...props} type='text'/>
            </PasStyle.Div>
        )
    }
}
   



export default Input