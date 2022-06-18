import * as React from 'react'
import Icons from '../../../../utils/Icons'
import { SetState } from '../../../contexts/types'
import PasStyle from '../../_PasStyle'
import { PasStyleProps } from '../../_PasStyle/types'


type Props = {
    state:[boolean, SetState<boolean>]
    closeHead?:boolean
    closeFooter?:boolean
    icon?:React.ReactNode
}

const PopupContainer = (props : PasStyleProps<Props>) => {

    const {
        children, 
        transform, 
        position, 
        bg, 
        state, 
        pd, 
        closeFooter, 
        closeHead, 
        icon
    } = props

    const close = () => {
        state[1](false)
    }

    return(
        <PasStyle
            {...props}
            transform={transform ?? 'translate(50vh, 10vh)'}
            position={position ?? 'fixed'}
            bg={bg ?? 'white'}
            pd={pd ?? '20px'}
        >
            {closeHead &&  
                <PasStyle flex end>
                    <PasStyle onClick={close}
                        tag='BUTTON'
                        bg='transparent'
                        color='white'
                        f_size='18px'
                        pd='10px'
                        cursor='pointer'
                        border='none'
                        position='absolute'
                        transform='translate(20px, -20px)'
                        _hover={{
                        transition: '1s',
                        color: 'red'
                    }}> 
                       {icon ??  <Icons.Md.MdClose />}
                    </PasStyle>
                </PasStyle>
            }
            {children}
            {closeFooter && 
                <PasStyle  onClick={close}
                    tag='BUTTON'
                    bg='transparent'
                    color='white'
                    f_size='18px'
                    pd='10px'
                    mg='10px'
                    cursor='pointer'
                    border='solid 1px'
                    b_Radius='8px'
                    _hover={{
                    transition: '1s',
                    color: 'red'
                }}
                >
                    Close
                </PasStyle>
            }
        </PasStyle>
    )
}

export default PopupContainer