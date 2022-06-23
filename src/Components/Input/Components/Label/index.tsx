import * as React from 'react'
import PasStyle, { LabelAttr, PasStyleProps } from '../../../..'
import Css from './index.styles'

const Label = (props:PasStyleProps<LabelAttr>) => {

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