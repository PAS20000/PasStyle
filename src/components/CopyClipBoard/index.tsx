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
    <PasStyle>
        <PasStyle 
            onClick={Copy}
            type='button' 
            tag='BUTTON'
            bg={theme.colors.bg}
            color={theme.colors.white}
            border='none'
            b_Radius='8px'
            cursor='pointer'
            onMouseLeave={() => setCopy(null)}
            onMouseEnter={() => setCopy('Copy')}
        >
           <FaCopy />
        {copy && 
            <PasStyle 
                position='absolute'
                bg={theme.colors.green}
                color={theme.colors.darkGray}
                b_Radius='8px'
                pd='5px'
                transform='translate(-10px, 5px)'
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
        </PasStyle>
    </PasStyle>
)
}

export default CopyClipBoard