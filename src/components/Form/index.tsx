import * as React from 'react'
import useThemeCTX from '../../hooks/useThemeCTX'
import Container from '../Container'
import PasStyle from "../_PasStyle"
import { Styles } from '../_PasStyle/types'
import Field from './Field'

type Props = {
    
}

const Form = () => {

    const { theme } = useThemeCTX()

    const [genStyle, setGenStyle] = React.useState()
    const [style, setStyle] = React.useState<Styles>({})

    return(
    <PasStyle>
        <PasStyle  grid columns='1fr 1fr'
            tag='FORM' 
            mg='30px' 
            pd='15px'
            bg={theme.colors.bg}
        >
                <PasStyle>
                    <PasStyle
                        tag='H2'
                        color={theme.colors.quintenary}
                        f_weight='300'
                        mg='0px 30px 0px'
                    > 
                            PasStyle
                    </PasStyle>
                    <Field 
                        prop='tag'
                        icon='tag='
                        pd='45px'
                    />
                    <Field 
                        prop='background'
                        icon='bg='
                    />
                    <Field 
                        prop='padding'
                        icon='pd='
                    />
                    <Field 
                        prop='color'
                        icon='color='
                        pd='55px'
                    />
                    <Field 
                        prop='border'
                        icon='border='
                        pd='67px'
                    />
                </PasStyle>
            <PasStyle {...style} />
        </PasStyle>
    </PasStyle>
    )
}

export default Form