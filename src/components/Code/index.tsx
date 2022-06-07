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
                color={theme.colors.yellow}
                b_Color={theme.colors.green}
                border='solid 1px'
                f_size='16px'
                pd='15px'
                mg='30px'
                shadow='2px 2px 2px black'
                onClick={() => closeAll()}
            >
                <PasStyle  id={copyId}>
                    {children}
                </PasStyle>
                {copyId && 
                    <PasStyle transform='translate(-30px, -15px)'>
                        <CopyClipBoard id={copyId}/>
                    </PasStyle>
                }  
            </PasStyle>
        </>
    )
}

export default Code