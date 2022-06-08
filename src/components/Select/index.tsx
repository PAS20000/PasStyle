import * as React from 'react'
import { GoKebabVertical } from 'react-icons/go'
import useThemeCTX from '../../hooks/useThemeCTX'
import useUserExperienceCTX from '../../hooks/useUserExperienceCTX'
import PasStyle from '../_PasStyle'

type Props = {
    title:string
    children?:React.ReactNode
    icon?:React.ReactChild
    w?:string
    wOptions?:string
    onClick?:React.MouseEventHandler
    open?:boolean
    transform?:string
}

const Select = ({
    title,
    children,
    icon,
    w,
    open,
    onClick,
    transform,
    wOptions
} : Props) => {

    const { theme } = useThemeCTX()
    
    const [value, setValue] = React.useState<any>()

    const Listener = () => {
        const arrayOptions = Array.from(document.querySelectorAll('.option'))

        arrayOptions.map(opt => opt.addEventListener('click', () => setValue(opt.innerHTML)))
    }

    React.useEffect(() => {
       
    }, [])

    React.useEffect(() => {
      Listener()
    }, [open])
   
    return(
        <PasStyle w={w} unselectableText>
            <PasStyle tag='LABEL'
                position='absolute'
                bg={theme.colors.bg}
                mg='2px 28px 0px'
                color={theme.colors.green}
                transform='translateY(-10px)'
                pd='0px 2px 0px'
                b_Radius='8px'
                f_size='12px'
                t_transform='capitalize'
            >
                {title}
            </PasStyle>
            <PasStyle 
                 f_size='12px'
                 t_transform='capitalize'
                 mg='0px 20px 0px'
                 pd='5px'
                 cursor='pointer'
                 t_decoration='none'
                 b_Radius='8px'
                 border='solid 2px'
                 color={open ? theme.colors.green : theme.colors.white}
                 _hover={{
                     transition: '1s',
                     color:theme.colors.green,
                     bg:theme.colors.darkGray
                 }}
                onClick={onClick}
            >
                <PasStyle flex between
                   
                >
                    <PasStyle f_size='0.8rem'>
                       {value ?? children[0].props.value}
                    </PasStyle>
                    {icon ??  <GoKebabVertical  style={{marginTop:'3px', fontSize:'14px'}}/>}
                </PasStyle>
            </PasStyle>
            {open &&
                <PasStyle grid
                    position='absolute'
                    bg={theme.colors.bg}
                    transform={transform}
                    pd='10px'
                    b_Radius='8px'
                    border='solid 1px'
                    b_Color={theme.colors.green}
                    t_align='center'
                    animation='show'
                    z='3'
                    w={wOptions}
                >
                    {children}
                </PasStyle>
            }
        </PasStyle>
    )
}

export default Select