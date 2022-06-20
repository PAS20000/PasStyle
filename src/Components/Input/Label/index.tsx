import * as React from 'react'
import PasStyle from '../../..'
import CreateKind from '../../../../utils/CreateKind/index.styles'
import { PasStyleProps } from '../../../../utils/types'
import Css from './index.styles'

type Kind = [
    'default'
]

type Props = {
    kind?:Kind[number]
}

const Label = (props:PasStyleProps<Props>) => {

    const { kind } = props

    return(
        <PasStyle.Div mg='15px 10px 0px'>
            <PasStyle.Label
                {...CreateKind({kind, Css})}
                {...props}
            />
        </PasStyle.Div>
    )
}


export default Label