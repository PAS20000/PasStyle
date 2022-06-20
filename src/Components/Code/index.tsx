import * as React from 'react'
import PasStyle from '../..'
import useThemeCTX from '../../Contexts/ThemeContext/useThemeCTX'
import useWhoIam from '../../Hooks/useWhoIam'
import CopyClipBoard from './CopyClipBoard'

type Props = {
    children?:React.ReactNode
}

const Code = ({
    children
} : Props) => {

    const { theme } = useThemeCTX()
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