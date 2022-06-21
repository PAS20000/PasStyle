import * as React from 'react'
import { InputPropsMethod } from '..'
import PasStyle, { PasStyleProps } from '../../..'
import Remove from '../../../../utils/Remove'
import Css from '../index.styles'
import Label from '../Label'

type Props = {
  
}

const Text = (props:PasStyleProps<InputPropsMethod & Props>) => {

    const { label } = props

    return(
        <PasStyle.Div mg='5px'>
           <Label htmlFor={label} {...props}>
                {label}
            </Label>
            <PasStyle.Input {...Remove.children(props)} {...Css.default()} type='text' />
        </PasStyle.Div>
    )
}

export default Text