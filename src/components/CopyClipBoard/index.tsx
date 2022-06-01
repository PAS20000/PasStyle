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

    const [copy, setCopy] = React.useState(false)

    const { theme } = useThemeCTX()

    const Copy = () => {
        
        const copyText = document.getElementById(id) as HTMLElement
      
        navigator.clipboard.writeText(copyText.innerText);
    }

    return( 
    <>
        <PasStyle
            onClick={Copy} 
            type='button' 
            tag='BUTTON'
            bg={theme.colors.bg}
            color={theme.colors.darkGray}
            b_Color={theme.colors.purple}
        >
           <FaCopy />
        </PasStyle>
        {copy && 
            <PasStyle>
                Copied
            </PasStyle>
        }
    </>
)
}

export default CopyClipBoard