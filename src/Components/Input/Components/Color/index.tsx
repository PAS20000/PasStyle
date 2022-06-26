import * as React from 'react'
import { InputPropsMethod } from '../..'
import PasStyle, { PasStyleProps } from '../../../..'
import useMethods from '../../../../Hooks/useMethods'
import Label from '../Label'
import Css from './index.styles'

type Props = {

}

const Color = (props:PasStyleProps<InputPropsMethod & Props>) => {

    const {onChange, placeholder, value, label} = props

    const { POST, GET } = useMethods()

    POST.PasStyle('input', 'color', 'input')

    return (
        <PasStyle.Div mg='5px'>
            <Label htmlFor={label.toString()} {...props}>
                {label}
            </Label>
            <PasStyle.Div
                onClick={() => GET.PasStyle('input', 'color').query.click()}
                {...Css.default()}
                {...props}
            >
                <PasStyle.Input
                    type='color' 
                    bg='transparent' 
                    border='none'
                    onChange={onChange}
                    placeholder={placeholder}
                    h='25px'
                    w='25px'
                    value={value}
                />
                <PasStyle.Span position='absolute' pd='2px'>
                    {value}
                </PasStyle.Span>
            </PasStyle.Div>
        </PasStyle.Div>
    )
}

export default Color