import * as React from 'react'
import PasStyle from '../..'
import CreateKind from '../../../utils/CreateKind/index.styles'
import { PasStyleProps } from '../../../utils/types'
import Css from './index.styles'

type Kind = [
    'default'
]

type Props = {
    icon?:React.ReactNode
    kind?:Kind[number]
}

const Button = (props:PasStyleProps<Props>) => {

    const {children, icon, kind} = props

    return(
        <PasStyle.Button
            {...Css.default()}
            {...{...props, children:null}}>
            {icon}
            {children}
        </PasStyle.Button>
    )
}

export default Button