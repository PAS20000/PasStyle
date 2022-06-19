import * as React from 'react'
import PasStyle from '../..'
import { PasStyleProps } from '../../types'

type Props = {
    
}

const Button = (props:PasStyleProps<Props>) => {

    return <PasStyle tag={props.tag ?? 'BUTTON'} {...props} />
}

export default Button