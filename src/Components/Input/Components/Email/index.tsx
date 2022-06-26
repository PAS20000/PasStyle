import * as React from 'react'
import { InputPropsMethod } from '../..'
import PasStyle, { PasStyleProps } from '../../../..'
import Remove from '../../../../../utils/Remove'
import Css from '../../index.styles'
import Label from '../Label'

type Props = {
  
}

const Email = (props:PasStyleProps<InputPropsMethod & Props>) => {

    const { children, label } = props

    return(
        <PasStyle.Div mg='5px'>
             <Label htmlFor={label.toString()} {...props}>
                {label}
            </Label>
            <PasStyle.Input {...Remove.children(props)} {...Css.default()} type='email'/>
        </PasStyle.Div>
    )
}

export default Email