import * as React from 'react'
import PasStyle from "../../../_PasStyle"
import useThemeCTX from '../../../_PasStyle/Contexts/ThemeContext/useThemeCTX'
import { PasStyleProps } from '../../../_PasStyle/utils/types'

type Props = {
    
}

const Container = (props:PasStyleProps<Props>) => {

    const { theme } = useThemeCTX()

    
   

    return(
        <PasStyle {...props}>
            {props.children}
        </PasStyle>
    )
}

export default Container