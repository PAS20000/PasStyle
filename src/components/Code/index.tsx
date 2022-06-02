import * as React from 'react'
import useThemeCTX from '../../hooks/useThemeCTX'
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

    return(
        <>
            <PasStyle 
                tag='CODE'
                pd='20px'
                bg={theme.colors.bg}
                b_Radius='8px'
                mg='15px 10px 0px'
                border={`solid 2px ${theme.colors.green}`}
                color={theme.colors.cyan}
                id={copyId}
                f_size='16px'
            > 
                {copyId && 
                    <PasStyle flex end >
                        <CopyClipBoard id={copyId}/>
                    </PasStyle>
                }
                {children}
               
            </PasStyle>
        </>
    )
}

export default Code