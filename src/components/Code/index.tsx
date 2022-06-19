import * as React from 'react'
import useUserExperienceCTX from '../../hooks/useUserExperienceCTX'
import CopyClipBoard from '../CopyClipBoard'
import PasStyle from "../../_PasStyle"
import useWhoIam from '../../hooks/useWhoIam'
import useThemeCTX from '../../_PasStyle/Contexts/ThemeContext/useThemeCTX'

type Props = {
    children?:React.ReactNode
}

const Code = ({
    children
} : Props) => {
    const arrayChildren = React.Children.toArray(children)

    const { theme } = useThemeCTX()
    const { closeSelect } = useUserExperienceCTX()
    const { sequencial } = useWhoIam('code')

    return(
        <>
            <PasStyle grid columns='96% 1fr'
                tag='CODE'
                b_radius='8px'
                bg={theme.colors.bg}
                color={theme.colors.green}
                f_size='16px'
                pd='15px'
                mg='25px'
                shadow='2px 2px 10px black'
                onClick={() => closeSelect.all()}
            >
                <PasStyle  id={sequencial} title={children.toString()}>
                    {children}
                </PasStyle>
                {sequencial && 
                   <CopyClipBoard id={sequencial}/>
                }  
            </PasStyle>
        </>
    )
}

export default Code