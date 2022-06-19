import * as React from 'react'
import PasStyle from '../../_PasStyle'
import useThemeCTX from '../../_PasStyle/Contexts/ThemeContext/useThemeCTX'

type Props = {
    children?:React.ReactNode
}

const Title = ({
    children
} : Props) => {

   const { theme } = useThemeCTX()

    return(
       <PasStyle 
            tag='H2'
            color={theme.colors.white}
            mg='30px'
            t_transform='capitalize'
        >
           {children}
       </PasStyle>
    )
}

export default Title