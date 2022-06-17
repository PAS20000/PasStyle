import * as React from 'react'
import { GoKebabVertical } from 'react-icons/go'
import Icons from '../../../utils/Icons'
import useThemeCTX from '../../hooks/useThemeCTX'
import useUserExperienceCTX from '../../hooks/useUserExperienceCTX'
import useWhoIam from '../../hooks/useWhoIam'
import PasStyle from '../_PasStyle'
import { PasStyleProps } from '../_PasStyle/types'

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

type ValueState = {
    navLang:string
    formTag:string
    formF_weight:string
    formT_transform:string
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

    const arrayChildren = React.Children.toArray(children)
    const items = 3
    const { theme } = useThemeCTX()
    const { globalOpen } = useUserExperienceCTX()

    const kid = (index?:number) => {
        return index ? children[index].props.value : children[0].props.value
    }

    const [value, setValue] = React.useState<ValueState>({
        navLang:kid(),
        formTag:kid(),
        formF_weight:kid(),
        formT_transform:kid()
    })

    const  [ pagination, setPagination ] = React.useState({
        init:0,
        final:items
    })

    const options = () => {
        return arrayChildren.slice(pagination.init , pagination.final)
    }

    const TratamentSetValue = (html : any) => {

        const { formF_weight, formT_transform, formTag, navLang } = value
        const { f_weight, t_transform, tag } = globalOpen.formSelect
        const { navSelect } = globalOpen

        setValue({
            navLang: navSelect && navLang,
            formF_weight:f_weight && formF_weight,
            formTag:tag && formTag,
            formT_transform:t_transform && formT_transform,
        })
    }

    const nextOpt = (e : React.MouseEvent | MouseEvent) => {
        const { length } = arrayChildren
        const { init, final } = pagination

        if(final < length && e.isTrusted){
            setPagination({
                init:init + items,
                final:final + items
            })
        } else {
            setPagination({
                init:0,
                final:items
            })
        }
    }

    const backOpt = (e : React.MouseEvent | MouseEvent) => {
        const { length } = arrayChildren
        const { init, final } = pagination

        if(init > (items - 1) && e.isTrusted){
            setPagination({
                init:init - items,
                final:final - items
            })
        } else {
            setPagination({
                init:length - items,
                final:length
            })
        }
    }

    const Listener = () => {
        const arrayOptions = Array.from(document.querySelectorAll('.option'))
      
        arrayOptions.map(opt => opt.addEventListener('click', () => TratamentSetValue(opt.innerHTML)))
    }

    React.useEffect(() => {
        Listener()
    }, [open])
      
    const TratamentValue = (childrenValue : React.ReactNode) : React.ReactNode => {

        const { formF_weight, formT_transform, formTag, navLang } = value
        const { f_weight, t_transform, tag } = globalOpen.formSelect
        const { navSelect } = globalOpen

        if(navSelect){
            return navLang
        }
        if(f_weight){
            return formF_weight
        }
        if(t_transform){
            return formT_transform
        }
        if(tag){
            return formTag
        }

        return childrenValue
       
    }

    const btnStyle : PasStyleProps = {  
        bg:'transparent',
        color: theme.colors.white,
        border: 'none',
        pd:'5px',
        b_Radius:'8px',
        cursor: 'pointer',
        _hover:{
            transition: '1s',
            bg:theme.colors.darkGray,
        }
    }

    return(
        <PasStyle
            w={w} 
            unselectableText
        >
            <PasStyle tag='LABEL'
                onClick={onClick}
                h='11px'
                position='absolute'
                bg={theme.colors.bg}
                mg='2px 28px 0px'
                color={theme.colors.green}
                transform='translateY(-10px)'
                pd='0px 4px 0px'
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
                    <PasStyle f_size='0.8rem'
                        color={theme.colors.yellow}
                    >
                       {TratamentValue(kid())}
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
                    <PasStyle onClick={(e) => backOpt(e)}
                        tag='BUTTON'
                        {...btnStyle}
                    >
                        <Icons.Io.IoIosArrowUp />
                    </PasStyle>
                        {options()}
                    <PasStyle onClick={(e) => nextOpt(e)} 
                        tag='BUTTON'
                        {...btnStyle}
                    >
                        <Icons.Io.IoIosArrowDown />
                    </PasStyle>
                </PasStyle>
            }
        </PasStyle>
    )
}

export default Select