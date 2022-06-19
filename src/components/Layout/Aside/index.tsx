import * as React from 'react'
import PasStyle from "../../../_PasStyle"
import useThemeCTX from '../../../_PasStyle/Contexts/ThemeContext/useThemeCTX'
import { PasStyleProps } from '../../../_PasStyle/utils/types'

type Props = {
    
}

const Aside = (props :PasStyleProps<Props>) => {

    const { theme } = useThemeCTX()

   

    return(
        <PasStyle 
            tag='ASIDE' 
            pd='25px'
            b_radius='8px'
            shadow='2px 2px 10px black'
            bg={theme.colors.bg}
            color={theme.colors.white}
        >
            {props.children}
        </PasStyle>
    )
}

export default Aside