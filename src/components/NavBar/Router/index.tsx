import * as React from 'react'
import useThemeCTX from '../../../hooks/useThemeCTX'
import PasStyle from '../../_PasStyle'

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
            mg='0px 5px 0px'
            pd='0px 5px 0px'
            b_Radius='8px'
            b_Bottom={current ? 'solid 2px':''}
            t_decoration='none'
            bg={current ?  theme.colors.darkGray : 'trasparent' }
            color={current ? theme.colors.red : theme.colors.white }
            _hover={{
                transition: '1s',
                color:theme.colors.red,
                bg:theme.colors.darkGray,
            }}
        >
          {name}
        </PasStyle>
    </>
    )
}


export default Router