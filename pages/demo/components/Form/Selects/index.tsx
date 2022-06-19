import * as React from 'react'
import { ShowState } from '../../..'
import Option from '../../../../../src/components/Select/Option'
import PasStyle from '../../../../../src/_PasStyle'
import { PasStyleProps, Tags } from '../../../../../src/_PasStyle/utils/types'
import useDemoCTX from '../../../../../src/hooks/useDemoCTX'
import useUserExperienceCTX from '../../../../../src/hooks/useUserExperienceCTX'
import Select from '../../../../../src/_PasStyle/Components/Select'

const tags = [
    'DIV', 
    'SECTION', 
    'ASIDE',
    'HEADER',
    'BODY',
    'ARTICLE',
    'FORM',
    'NAV',
    'FOOTER',
    'BUTTON',
    'MAIN',
    'SPAN',
    'H1',
    'H2',
    'H3',
    'H4',
    'H5',
    'H6',
    'INPUT',
    'P',
    'TD',
    'TR',
    'TH',
    'THEAD',
    'TBODY',
    'TFOOT',
    'TABLE',
    'CODE',
    'LABEL',
    'IFRAME'
]

const weights = [
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
    900
]

const textTransform = [
    'capitalize'
]

type Props = {
    show:ShowState
}

type OptionReturn = {
    tag:Function
    weight:Function
    transform:Function
}

const Selects = ({
    show
} : Props) => {

    const { globalOpen, setGlobalOpen } = useUserExperienceCTX()
    const { style, setStyle } = useDemoCTX()

    const open = (select : 'tag' | 'f_weight' | 't_transform') => {

        const { tag, f_weight, t_transform } = globalOpen.formSelect

        setGlobalOpen({
            ...globalOpen,
            formSelect:{
                tag:select === 'tag' ? (tag ? false : true) : false,
                f_weight:select === 'f_weight' ? (f_weight ? false : true) : false,
                t_transform:select === 't_transform' ? (t_transform ? false : true ) : false,
            }
        })
    }

    const OptionClick = () : OptionReturn => {
        const { t_transform, tag, f_weight } = style

        setGlobalOpen({
            ...globalOpen,
            formSelect:{
                f_weight:false,
                t_transform:false,
                tag:false
            }
        })

        return {
            tag(tagName : any) {
                setStyle({...style, tag: tagName ?? tag})
            },
            weight(weight : string) {
                setStyle({...style, f_weight: weight ?? f_weight})
            },
            transform(t_transformValue : string) {
                setStyle({...style, t_transform: t_transformValue ?? t_transform})
            }
        }
    }

    type Wopt = {
        wOptions:string
    }

    const selectStyle : PasStyleProps<Wopt> = {
        w:'33%',
        wOptions:'16%',
        transform:'translate(35px, 5px)'
    }
    
    return(
        <>
          {show !== 'css' &&
            <PasStyle mg='15px'flex >
                <Select 
                    title='tag :' 
                    onClick={() => open('tag')}
                    open={globalOpen.formSelect.tag}
                    {...selectStyle}
                >
                    {tags.map((tag, index) =>
                        <Option 
                            key={index} 
                            value={style.tag ?? tag} 
                            onClick={() => OptionClick().tag(tag)}
                        >
                            {tag}
                        </Option>
                    )}
                </Select>
                <Select
                    title='font-weight :'
                    onClick={() => open('f_weight')} 
                    open={globalOpen.formSelect.f_weight}
                    {...selectStyle}
                >
                    {weights.map((weight, index) => 
                        <Option
                            key={index}
                            value={weight.toString()}
                            onClick={() => OptionClick().weight(weight)}
                        >
                            {weight}
                        </Option>
                    )}
                </Select>
                <Select
                    title='text-transform :'
                    onClick={() => open('t_transform')} 
                    open={globalOpen.formSelect.t_transform}
                    {...selectStyle}
                >
                    {textTransform.map((transform, index) => 
                        <Option
                            key={index}
                            value={transform}
                            onClick={() => OptionClick().transform(transform)}
                        >
                            {transform}
                        </Option>
                    )}
                </Select>
            </PasStyle>
        }
    </>
    )
}

export default Selects