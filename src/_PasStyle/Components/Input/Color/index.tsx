import * as React from 'react'
import PasStyle from '../../..'
import useWhoIam from '../../../../hooks/useWhoIam'
import { PasStyleProps } from '../../../types'
import Css from './index.styles'

type css = [
    'default'
]

type Props = {
    css?:css[number]
}

const Color = (props:PasStyleProps<Props>) => {

    const {type, onChange, placeholder, value, css} = props

    const { random } = useWhoIam('color')

    const createCss = (css : css[number]) : PasStyleProps => {
        return {...Css[css ?? 'default']()}
    }

    return (
        <PasStyle
            onClick={() => document.getElementById(random).click()}
            {...createCss(css)}
            {...props}
        >
        <PasStyle 
            tag='INPUT'
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
        <PasStyle tag='SPAN' position='absolute' pd='2px'>
            {value}
        </PasStyle>
    </PasStyle>
    )
}

export default Color