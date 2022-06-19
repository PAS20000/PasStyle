import * as React from 'react'
import PasStyle from '../../../../../src/_PasStyle'
import useThemeCTX from '../../../../../src/_PasStyle/Contexts/ThemeContext/useThemeCTX'

type Props = {
   onClick:React.MouseEventHandler
   children:React.ReactNode
   title?:string
}

const Button = ({
    onClick,
    children,
    title
} : Props) => {

    const {theme} = useThemeCTX()

    return(
        <PasStyle tag='BUTTON'
            title={title}
            onClick={onClick}
            w='40px'
            h='40px'
            mg='0px 5px 0px'
            f_size='16px'
            border='none'
            bg={theme.colors.darkGray}
            color={theme.colors.white}
            b_radius='50%'
            cursor='pointer'
            _hover={{
                transition: '1s',
                bg:theme.colors.bg,
                color: theme.colors.red,
            }}
        >
            {children}
        </PasStyle>
    )
}

export default Button