import * as React from 'react'
import useThemeCTX from '../../hooks/useThemeCTX'
import useUserExperienceCTX from '../../hooks/useUserExperienceCTX'
import CopyClipBoard from '../CopyClipBoard'
import PasStyle from "../_PasStyle"

type Props = {
    children?:React.ReactNode
    string?:string
    copyId?:string
}

const Code = ({
    children,
    copyId,
} : Props) => {
    const arrayChildren = React.Children.toArray(children)

    const { theme } = useThemeCTX()
    const { closeSelect } = useUserExperienceCTX()

    return(
        <>
            <PasStyle grid columns='96% 1fr'
                tag='CODE'
                b_Radius='8px'
                bg={theme.colors.bg}
                color={theme.colors.green}
                f_size='16px'
                pd='15px'
                mg='25px'
                shadow='2px 2px 10px black'
                onClick={() => closeSelect.all()}
            >
                <PasStyle  id={copyId} title={children.toString()}>
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