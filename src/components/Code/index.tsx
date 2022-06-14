import * as React from 'react'
import useThemeCTX from '../../hooks/useThemeCTX'
import useUserExperienceCTX from '../../hooks/useUserExperienceCTX'
import CopyClipBoard from '../CopyClipBoard'
import PasStyle from "../_PasStyle"

type Props = {
    children?:React.ReactNode
    copyId?:string
}

const Code = ({
    children,
    copyId
} : Props) => {

    const { theme } = useThemeCTX()
    const { closeAll } = useUserExperienceCTX()
    return(
        <>
            <PasStyle flex between
                tag='CODE'
                b_Radius='8px'
                bg={theme.colors.bg}
                color={theme.colors.green}
                f_size='16px'
                pd='15px'
                mg='25px'
               
                shadow='2px 2px 10px black'
                onClick={() => closeAll()}
            >
                <PasStyle  id={copyId}>
                    {children}
                </PasStyle>
                {copyId && 
                   <CopyClipBoard id={copyId}/>
                }  
            </PasStyle>
        </>
    )
}

export default Code