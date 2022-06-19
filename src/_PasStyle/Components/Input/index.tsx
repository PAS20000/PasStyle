import * as React from 'react'
import PasStyle from '../..'
import { PasStyleProps } from '../../types'

type css = [
    'default'
]

type Props = {
    css?:css[number]
}

const Input = (props:PasStyleProps<Props>) => {

    return <PasStyle tag={props.tag ?? 'INPUT'} {...props} />
}

export default Input