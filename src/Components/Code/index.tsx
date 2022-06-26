import * as React from 'react'
import PasStyle from '../..'
import useThemeCTX from '../../Contexts/ThemeContext/useThemeCTX'
import useId from '../../Hooks/useMethods'
import CopyClipBoard from './CopyClipBoard'

type Props = {
    children?:React.ReactNode
}

const Code = ({
    children
} : Props) => {

    const { theme } = useThemeCTX()
    const { hash } = useId('code')

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
                <PasStyle.Div  id={hash} title={children.toString()}>
                    {children}
                </PasStyle.Div>
                {hash && 
                   <CopyClipBoard id={hash}/>
                }  
            </PasStyle.Code>
        </>
    )
}

export default Code