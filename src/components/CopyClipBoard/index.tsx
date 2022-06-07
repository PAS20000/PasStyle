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

    const [copy, setCopy] = React.useState<'Copy' | 'Copied!' | null>()

    const { theme } = useThemeCTX()

    const Copy = () => {
        
        const copyText = document.getElementById(id) as HTMLElement
      
        navigator.clipboard.writeText(copyText.innerText);

        setCopy('Copied!')
    }

    return( 
    <>
        <PasStyle 
            position='absolute'
            onClick={Copy} 
            type='button' 
            tag='BUTTON'
            bg={theme.colors.bg}
            color={theme.colors.white}
            border='none'
            b_Radius='8px'
            pd='10px'
            mg='6px'
            cursor='pointer'
            onMouseLeave={() => setCopy(null)}
            onMouseEnter={() => setCopy('Copy')}
        >
           <FaCopy />
        </PasStyle>
        {copy && 
            <PasStyle 
                position='absolute'
                bg={theme.colors.cyan}
                color={theme.colors.darkGray}
                b_Radius='8px'
                pd='5px'
                transform='translate(0px, 45px)'
                f_weight='700'
                animation='show'

                _hover={{
                    transition:'1s',
                    bg:theme.colors.darkGray
                }}
            >
                {copy}
            </PasStyle>
        }
    </>
)
}

export default CopyClipBoard