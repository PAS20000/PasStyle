import * as React from 'react'
import PasStyle from '../../_PasStyle'
import useThemeCTX from '../../_PasStyle/Contexts/ThemeContext/useThemeCTX'

type Props = {
    id:string
}

const CopyClipBoard = ({
    id,
} : Props) => {

    const [copy, setCopy] = React.useState<'Copy' | 'Copied!' | null>()

    const { theme } = useThemeCTX()

    const Action = {
        Copy() {
            const copyText = document.getElementById(id) as HTMLElement
        
            navigator.clipboard.writeText(copyText.innerText);

            setCopy('Copied!')
        },
        Leave() {
            setCopy(null)
        },
        Enter() {
            setCopy('Copy')
        }
    }

    return( 
    <PasStyle>
        <PasStyle 
            onClick={Action.Copy}
            type='button' 
            tag='BUTTON'
            bg={theme.colors.bg}
            color={theme.colors.white}
            border='none'
            b_radius='8px'
            cursor='pointer'
            onMouseLeave={Action.Leave}
            onMouseEnter={Action.Enter}
        >
           <Icons.Fa.FaCopy />
        {copy && 
            <PasStyle 
                position='absolute'
                bg={theme.colors.green}
                color={theme.colors.darkGray}
                b_radius='8px'
                pd='5px'
                transform='translate(-10px, 5px)'
                f_weight='700'
                animation={{
                    name:'show',
                    time:1,
                }}
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