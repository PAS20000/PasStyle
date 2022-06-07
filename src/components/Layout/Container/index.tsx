import * as React from 'react'
import useThemeCTX from '../../../hooks/useThemeCTX'
import useUserExperienceCTX from '../../../hooks/useUserExperienceCTX'
import PasStyle from "../../_PasStyle"
import { PasStyleProps } from '../../_PasStyle/types'

type Props = {
    
}

const Container = (props:PasStyleProps<Props>) => {

    const { theme } = useThemeCTX()

    const { closeAll } = useUserExperienceCTX()
   

    return(
        <PasStyle {...props} onClick={() => closeAll()}>
            {props.children}
        </PasStyle>
    )
}

export default Container