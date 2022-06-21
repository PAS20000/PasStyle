import * as React from 'react'
import PasStyle, { PasStyleProps } from '../..'
import Css from './index.styles'

type Props = {
    kind?:[
        'circle'
    ][number]
}

const Button = (props:PasStyleProps<Props>) => {

        const { children, kind } = props

        return(
            <PasStyle.Button {...Css[kind ?? 'default']()} {...props}>
                {children}
            </PasStyle.Button>
        )
    }

export default Button