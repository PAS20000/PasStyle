import * as React from 'react'
import PasStyle from '../../..'
import Remove from '../../../../utils/Remove'
import { PasStyleProps } from '../../../../utils/types'
import Css from '../index.styles'
import Label from '../Label'

type Props = {
  
}

const Email = (props:PasStyleProps<Props>) => {

    const { children, label } = props

    return(
        <PasStyle.Div mg='5px'>
             <Label htmlFor={label} {...props}>
                {label}
            </Label>
            <PasStyle.Input {...Remove.children(props)} {...Css.default()} type='email'/>
        </PasStyle.Div>
    )
}

export default Email