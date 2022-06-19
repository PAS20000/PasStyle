import * as React from 'react'
import PasStyle from '../../..'
import CreateKind from '../../../utils/CreateKind/index.styles'
import { PasStyleProps } from '../../../utils/types'
import Css from './index.styles'

type Kind = [
    'default'
]

type Props = {
    kind?:Kind[number]
}

const Default = (props:PasStyleProps<Props>) => {

    const {kind} = props

    return <PasStyle {...CreateKind({ kind, Css })} tag={props.tag ?? 'INPUT'} {...props} />
}

export default Default