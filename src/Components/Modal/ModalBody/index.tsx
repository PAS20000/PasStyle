import * as React from 'react'
import PasStyle, { PasStyleProps } from '../../..'
import Css from './index.styles'

type Props = {

}
   

const ModalBody = (props:PasStyleProps<Props>) => {
    
    return <PasStyle.Div {...Css.default()} {...props}/>
}

export default ModalBody