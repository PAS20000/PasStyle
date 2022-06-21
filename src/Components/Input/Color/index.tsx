import * as React from 'react'
import PasStyle from '../../..'
import { PasStyleProps } from '../../../../utils/types'
import useWhoIam from '../../../Hooks/useWhoIam'
import Label from '../Label'
import Css from './index.styles'

const Color = (props:PasStyleProps) => {

    const {onChange, placeholder, value, label} = props

    const { random } = useWhoIam('color')

    return (
        <PasStyle.Div mg='5px'>
            <Label htmlFor={label} {...props}>
                {label}
            </Label>
            <PasStyle.Div
                onClick={() => document.getElementById(random).click()}
                {...Css.default()}
                {...props}
            >
                <PasStyle.Input
                    id={random}
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