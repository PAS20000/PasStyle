import * as React from 'react'
import PasStyle from '../../..'
import { PasStyleProps } from '../../../utils/types'
import Css from './index.styles'

type css = [
    'default'
]

type Props = {
   css?:css[number]
}

const PopupBody = (props:PasStyleProps<Props>) => {

    const createCss = (css : css[number]) : PasStyleProps => {
        return {...Css[css ?? 'default']()}
    }

    return <PasStyle {...createCss(props.css)} {...props}/>
}

export default PopupBody