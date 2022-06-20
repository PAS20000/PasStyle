import * as React from 'react'
import PasStyle from '../..'
import { PasStyleProps } from '../../../utils/types'
import Css from './index.styles'

type Props = {
    
}

const Button = {
    Default(props:PasStyleProps<Props>) {

        const { children } = props

        return(
            <PasStyle.Button {...Css.default()} {...props}>
                {children}
            </PasStyle.Button>
        )
    }
}

export default Button