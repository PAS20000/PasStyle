import * as React from 'react'
import { Users } from '../../..'
import { SetState } from '../../../../src/contexts/types'
import useThemeCTX from '../../../../src/hooks/useThemeCTX'
import PasStyle from '../../../../src/components/_PasStyle'

type Props = {
    setOpen:SetState<boolean>
    open?:boolean
}

const Avatar = ({
    name,
    avatar,
    setOpen,
    open
} : Users & Props) => {

    const { theme } = useThemeCTX()

    return(
        <>
            <PasStyle flex center
                onClick={() => setOpen(prev => prev ? false : true)}
                href={avatar} 
                bg={theme.colors.bg}
                pd='10px'
                mg='10px'
                b_Radius='8px'
                border='solid 2px'
                t_decoration='none'
                color={theme.colors.purple}
                cursor='pointer'
                t_transform='capitalize'
                _hover={{
                    transition:'1s',
                    bg:theme.colors.bg,
                    color:theme.colors.red,
                    b_Color:theme.colors.red,
                }}
                animation='show'
            > 
                <PasStyle 
                    tag='IMG'
                    src={avatar}
                    w='50px'
                    h='50px'
                    mg='10px'
                    b_Radius='50%'
                />
                <PasStyle 
                    tag='H2'
                >
                    {name}
                </PasStyle>
            </PasStyle>
    </>
    )   
}

export default Avatar