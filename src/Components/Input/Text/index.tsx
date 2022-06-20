import * as React from 'react'
import PasStyle from '../../..'
import { PasStyleProps } from '../../../../utils/types'
import Css from '../index.styles'

type Props = {
  
}

const Text = (props:PasStyleProps<Props>) => {

    const { children } = props

    return(
        <PasStyle.Div mg='5px'>
            {children}
            <PasStyle.Input {...{...props, children:null}} {...Css.default()} type='text' />
        </PasStyle.Div>
    )
}

export default Text