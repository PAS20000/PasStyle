import * as React from 'react'
import useThemeCTX from '../../../hooks/useThemeCTX'
import PasStyle from '../../_PasStyle'

type Props = {
    children?:React.ReactNode
}

const Option = ({
    children,
} : Props) => {

    const { theme } = useThemeCTX()

    return(
        <>
            <PasStyle
                cursor='pointer'
                _hover={{
                    transition:'1s',
                    bg:theme.colors.darkGray,
                }}
            >
                {children}
            </PasStyle>
        </>
    )
}

export default Option