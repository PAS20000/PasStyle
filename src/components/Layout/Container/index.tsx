import * as React from 'react'
import useThemeCTX from '../../../hooks/useThemeCTX'
import useUserExperienceCTX from '../../../hooks/useUserExperienceCTX'
import PasStyle from "../../../_PasStyle"
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