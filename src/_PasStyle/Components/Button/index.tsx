import * as React from 'react'
import PasStyle from '../..'
import { PasStyleProps } from '../../types'

type Props = {
    icon?:React.ReactNode
}

const Button = (props:PasStyleProps<Props>) => {

    const {children, icon} = props

    return(
        <PasStyle tag={props.tag ?? 'BUTTON'} {...{...props, children:null}}>
            {icon}
            {children}
        </PasStyle>
    )
}

export default Button