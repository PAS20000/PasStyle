import * as React from 'react'
import PasStyle from '../../..'
import { PasStyleProps } from '../../../types'
import Css from './index.styles'

type css = [
    'default'
]

type Props = {
    css?:css[number]
}

const Default = (props:PasStyleProps<Props>) => {

    const createCss = (css : css[number]) : PasStyleProps => {
        return {...Css[css ?? 'default']()}
    }

    return <PasStyle {...createCss(props.css)} tag={props.tag ?? 'INPUT'} {...props} />
}

export default Default