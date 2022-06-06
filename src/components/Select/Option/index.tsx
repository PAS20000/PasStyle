import * as React from 'react'
import useThemeCTX from '../../../hooks/useThemeCTX'
import PasStyle from '../../_PasStyle'

type Props = {
    children?:React.ReactNode
    onClick?:React.MouseEventHandler
}

const Option = ({
    children,
    onClick,
} : Props) => {

    const { theme } = useThemeCTX()

    return(
        <>
            <PasStyle
                onClick={onClick}
                mg='5px 0px 0px'
                cursor='pointer'
                _hover={{
                    bg:theme.colors.darkGray,
                }}
            >
                {children}
            </PasStyle>
        </>
    )
}

export default Option