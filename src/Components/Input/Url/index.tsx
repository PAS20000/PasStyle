import * as React from 'react'
import PasStyle, { PasStyleProps } from '../../..'
import Css from '../index.styles'
import Label from '../Label'

type Props = {
  
}

const Url = (props:PasStyleProps<Props>) => {

    const { children, label } = props

    return(
        <PasStyle.Div mg='5px'>
            <Label htmlFor={label} {...props}>
                {label}
            </Label>
            <PasStyle.Input {...{...props, children:null}} {...Css.default()} type='url'/>
        </PasStyle.Div>
    )
}

export default Url