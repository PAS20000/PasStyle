import * as React from 'react'
import PasStyle from '../..'
import useThemeCTX from '../../Contexts/ThemeContext/useThemeCTX'
import useMethods from '../../Hooks/useMethods'
import CopyClipBoard from './CopyClipBoard'

type Props = {
    children?:React.ReactNode
}

const Code = ({
    children
} : Props) => {

    const { theme } = useThemeCTX()
    const { POST } = useMethods()

    return(
        <>
            <PasStyle.Code grid columns='96% 1fr'
                b_radius='8px'
                bg={theme.colors.gray[600]}
                color={theme.colors.green[300]}
                f_size='16px'
                pd='15px'
                mg='25px'
                shadow='2px 2px 10px black'
            >
                <PasStyle.Div  id={'12313'} title={children.toString()}>
                    {children}
                </PasStyle.Div>
                {'12313' && 
                   <CopyClipBoard id={'12313'}/>
                }  
            </PasStyle.Code>
        </>
    )
}

export default Code