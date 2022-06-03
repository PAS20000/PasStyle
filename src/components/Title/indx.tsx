import * as React from 'react'
import useThemeCTX from '../../hooks/useThemeCTX'
import PasStyle from '../_PasStyle'

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
            color={theme.colors.purple}
            mg='30px'
        >
           {children}
       </PasStyle>
    )
}

export default Title