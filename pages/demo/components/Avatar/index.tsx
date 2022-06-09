import * as React from 'react'
import { Users } from '../../..'
import useThemeCTX from '../../../../src/hooks/useThemeCTX'
import PasStyle from '../../../../src/components/_PasStyle'
import useDemoCTX from '../../../../src/hooks/useDemoCTX'

type Props = {
   
}

const Avatar = ({
    name,
    avatar,
} : Users & Props) => {

    const { theme } = useThemeCTX()
    const { style, hover } = useDemoCTX()
    return(
        <PasStyle>
            <PasStyle flex center
                href={avatar} 
                {...style}
                _hover={{
                    ...hover
                }}
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
    </PasStyle>
    )   
}

export default Avatar