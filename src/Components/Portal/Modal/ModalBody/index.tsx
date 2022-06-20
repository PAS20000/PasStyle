import * as React from 'react'
import PasStyle from '../../../..'
import { PasStyleProps } from '../../../../../utils/types'
import Css from './index.styles'

type Props = {

}
   

const ModalBody = (props:PasStyleProps<Props>) => {
   


    return <PasStyle.Div {...Css.default()} {...props}/>
}

export default ModalBody