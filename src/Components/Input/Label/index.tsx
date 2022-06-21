import * as React from 'react'
import PasStyle, { PasStyleProps } from '../../..'
import Css from './index.styles'

const Label = (props:PasStyleProps) => {

    return(
        <PasStyle.Div mg='15px 10px 0px'>
            <PasStyle.Label
                {...Css.default()}
                {...props}
            />
        </PasStyle.Div>
    )
}


export default Label