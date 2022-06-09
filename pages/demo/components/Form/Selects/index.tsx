import * as React from 'react'
import { ShowState } from '..'
import Select from '../../../../../src/components/Select'
import Option from '../../../../../src/components/Select/Option'
import PasStyle from '../../../../../src/components/_PasStyle'
import useDemoCTX from '../../../../../src/hooks/useDemoCTX'
import useUserExperienceCTX from '../../../../../src/hooks/useUserExperienceCTX'

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
    'A',
    'IMG',
    'NEXTLINK',
    'NEXTIMG',
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

const Selects = ({
    show
} : Props) => {

    const { globalOpen, setGlobalOpen } = useUserExperienceCTX()
    const { style, setStyle } = useDemoCTX()

    const open = () => {
        setGlobalOpen({
            ...globalOpen,
            formSelect:globalOpen.formSelect ? false : true
        })
    }

    const OptionClick = (tag : any) => {
        setStyle({...style, tag : tag})
        setGlobalOpen({
            ...globalOpen,
            formSelect:false
        })
    }
    return(
        <>
          {show !== 'css' &&
            <PasStyle mg='15px'flex >
                <Select 
                    title='tag :' 
                    w='33%'
                    wOptions='16%'
                    transform='translate(25px, 5px)'
                    onClick={open} 
                    open={globalOpen.formSelect}
                >
                    {tags.map((tag, index) =>
                        <Option 
                            key={index} 
                            value={style.tag ?? tag} 
                            onClick={() => OptionClick(tag)}
                        >
                            {tag}
                        </Option>
                    )}
                </Select>
                <Select
                    title='font-weight :'
                    w='33%'
                    
                >
                    {weights.map((weight, index) => 
                        <Option
                            key={index}
                            value={weight.toString()}
                        >
                            {weight}
                        </Option>
                    )}
                </Select>
                <Select
                    title='text-transform :'
                    w='33%'
                    
                >
                    {textTransform.map((transform, index) => 
                        <Option
                            key={index}
                            value={transform}
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