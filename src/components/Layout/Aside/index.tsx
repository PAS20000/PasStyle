import * as React from 'react'
import useThemeCTX from '../../../hooks/useThemeCTX'
import PasStyle from "../../_PasStyle"
import { PasStyleProps } from '../../_PasStyle/types'

type Props = {
    
}

const Aside = (props :PasStyleProps<Props>) => {

    const { theme } = useThemeCTX()

   

    return(
        <PasStyle 
            tag='ASIDE' 
            pd='25px'
            b_Radius='8px'
            shadow='2px 2px 2px black'
            border='solid 2px'
            bg={theme.colors.bg}
            color={theme.colors.white}
            b_Color={theme.colors.purple}
        >
            {props.children}
        </PasStyle>
    )
}

export default Aside