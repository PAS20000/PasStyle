import * as React from 'react'
import PasStyle from '../../../_PasStyle'
import useThemeCTX from '../../../_PasStyle/Contexts/ThemeContext/useThemeCTX'

type Props = {
    name:string
    href:string
    target?:string
    current?:boolean
}

const Router = ({
    name,
    href,
    target,
    current,
} : Props) => {

    const { theme } = useThemeCTX()

    return(
    <>
        <PasStyle
            tag='NEXTLINK'
            target={target}
            href={href}
            f_size='18px'
            f_weight='500'
            b_bottom={current ? 'solid 1px' : ''}
            mg='5px 5px 0px'
            pd='0px 5px 0px'
            b_radius='8px'
            t_decoration='none'
            bg={current ?  theme.colors.darkGray : 'trasparent' }
            color={current ? theme.colors.green : theme.colors.white }
            _hover={{
                transition: '1s',
                color:theme.colors.green,
                bg:theme.colors.darkGray,
            }}
        >
          {name}
        </PasStyle>
    </>
    )
}


export default Router