import * as React from 'react'
import { Users } from '../../..'
import { SetState } from '../../../../src/contexts/types'
import useThemeCTX from '../../../../src/hooks/useThemeCTX'
import PasStyle from '../../../../src/components/_PasStyle'
import useDemoCTX from '../../../../src/hooks/useDemoCTX'

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
    const { setStyle, style } = useDemoCTX()

    return(
        <>
            <PasStyle flex center
                onClick={() => setOpen(prev => prev ? false : true)}
                href={avatar} 
                {...style}
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