import * as React from 'react'
import PasStyle from '../../..'
import CreateKind from '../../../../utils/CreateKind/index.styles'
import { PasStyleProps } from '../../../../utils/types'
import useWhoIam from '../../../Hooks/useWhoIam'
import Css from './index.styles'

type css = [
    'default'
]

type Props = {
    kind?:css[number]
}

const Color = (props:PasStyleProps<Props>) => {

    const {type, onChange, placeholder, value, kind} = props

    const { random } = useWhoIam('color')

    return (
        <PasStyle.Div
            onClick={() => document.getElementById(random).click()}
            {...CreateKind({kind, Css})}
            {...props}
        >
        <PasStyle.Input
            id={random}
            type={type} 
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
    )
}

export default Color