import * as React from 'react'
import { FaEdit } from 'react-icons/fa'
import PasStyle from '../../../../src/components/_PasStyle'
import { SetState } from '../../../../src/contexts/types'
import useThemeCTX from '../../../../src/hooks/useThemeCTX'


type Props = {
    setShowForm:SetState<boolean>
}


const Config = ({
    setShowForm
} : Props ) => {

    const { theme } = useThemeCTX()

    return(
        <PasStyle
                pd='10px'
                mg='10px'
                shadow='1px 1px 10px black'
                b_Radius='8px'
                bg={theme.colors.bg}
            >
            <PasStyle tag='BUTTON'
                title='Edit'
                onClick={() => setShowForm(true)}
                pd='10px'
                border='none'
                bg={theme.colors.bg}
                color={theme.colors.white}
                b_Radius='8px'
                cursor='pointer'
                _hover={{
                    transition: '1s',
                    bg:theme.colors.darkGray,
                    color: theme.colors.cyan,
                }}
            >
                <FaEdit />
            </PasStyle>
        </PasStyle>
    )
}

export default Config