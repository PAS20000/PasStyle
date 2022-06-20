import * as React from 'react'
import PasStyle from '../../..'
import useThemeCTX from '../../../Contexts/ThemeContext/useThemeCTX'
import Icons from '../../Icons'

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
    <PasStyle.Div>
        <PasStyle.Button
            onClick={Action.Copy}
            type='button' 
            bg={theme.colors.gray[600]}
            color={theme.colors.white}
            border='none'
            b_radius='8px'
            cursor='pointer'
            onMouseLeave={Action.Leave}
            onMouseEnter={Action.Enter}
        >
           <Icons.Fa.FaCopy />
        {copy && 
            <PasStyle.Div
                position='absolute'
                bg={theme.colors.green[300]}
                color={theme.colors.gray[400]}
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
                    bg:theme.colors.gray[400]
                }}
            >
                {copy}
            </PasStyle.Div>
        }
        </PasStyle.Button>
    </PasStyle.Div>
)
}

export default CopyClipBoard