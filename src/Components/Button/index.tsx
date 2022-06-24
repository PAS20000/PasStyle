import * as React from 'react'
import PasStyle, { PasStyleProps } from '../..'
import Css from './index.styles'

type ArtButton = [
    'add',
    'circle'
][number]
type Props = {
   Art?:ArtButton
}

const Button = (props:PasStyleProps<Props>) => {

        const { children, Art } = props

        return(
            <PasStyle.Button {...Css[Art ?? 'default']()} {...props}>
                {children}
            </PasStyle.Button>
        )
    }

export default Button