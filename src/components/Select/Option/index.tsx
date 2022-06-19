import * as React from 'react'
import PasStyle from '../../../_PasStyle'
import useThemeCTX from '../../../_PasStyle/Contexts/ThemeContext/useThemeCTX'

type Props = {
    children?:React.ReactNode
    onClick?:React.MouseEventHandler
    value?:string
}

const Option = ({
    children,
    onClick,
    value
} : Props) => {

    const { theme } = useThemeCTX()
   
    return(
        <>
            <PasStyle
                className='option'
                value={value}
                onClick={onClick}
                mg='0px 0px 0px'
                cursor='pointer'
                color={theme.colors.white}
                _hover={{
                    bg:theme.colors.darkGray,
                    color: theme.colors.yellow
                }}
            >
                {children}
            </PasStyle>
        </>
    )
}

export default Option