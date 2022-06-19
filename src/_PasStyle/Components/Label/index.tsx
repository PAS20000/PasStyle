import * as React from 'react'
import PasStyle from '../..'
import { PasStyleProps } from '../../types'
import Css from './index.styles'

type css = [
    'default'
]

type Props = {
    css?:css[number]
}

const Label = (props:PasStyleProps<Props>) => {

    const { css } = props

    const createCss = (css : css[number]) : PasStyleProps => {
        return {...Css[css ?? 'default']()}
    }
    return(
        <PasStyle mg='15px 10px 0px'>
            <PasStyle tag='LABEL'
                {...createCss(css)}
                {...props}
            />
        </PasStyle>
    )
}


export default Label