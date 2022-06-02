import * as React from 'react'
import { FaCopy } from 'react-icons/fa'
import useThemeCTX from '../../hooks/useThemeCTX'
import PasStyle from '../_PasStyle'

type Props = {
    id:string
}

const CopyClipBoard = ({
    id,
} : Props) => {

    const [copy, setCopy] = React.useState<boolean>(false)

    const { theme } = useThemeCTX()

    const Copy = () => {
        
        const copyText = document.getElementById(id) as HTMLElement
      
        navigator.clipboard.writeText(copyText.innerText);

        setCopy(true)
    }

    return( 
    <>
        <PasStyle 
            position='absolute'
            onClick={Copy} 
            type='button' 
            tag='BUTTON'
            bg={theme.colors.bg}
            color={theme.colors.cyan}
            b_Color={theme.colors.cyan}
            border='solid 2px'
            b_Radius='8px'
            pd='8px'
            mg='5px'
            cursor='pointer'
            onMouseLeave={() => { setCopy(false) }}
        >
           <FaCopy />
        </PasStyle>
        {copy && 
            <PasStyle 
                position='absolute'
                bg={theme.colors.green}
                color={theme.colors.darkGray}
                b_Radius='8px'
                pd='5px'
                transform='translate(10px, 45px)'
                f_weight='700'
                animation='show'
            >
                Copied
            </PasStyle>
        }
    </>
)
}

export default CopyClipBoard