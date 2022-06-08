import * as React from 'react'
import useThemeCTX from '../../../../src/hooks/useThemeCTX'
import Code from '../../../../src/components/Code'
import PasStyle from "../../../../src/components/_PasStyle"
import CreateStyle from '../../../../src/components/_PasStyle/CreateStyle/index.styles'
import Field from '../../../../src/components/Field'
import Select from '../../../../src/components/Select'
import Option from '../../../../src/components/Select/Option'
import useUserExperienceCTX from '../../../../src/hooks/useUserExperienceCTX'
import { SetState } from '../../../../src/contexts/types'
import Container from '../../../../src/components/Layout/Container'
import { MdClose } from 'react-icons/md'
import { Styles, Tags } from '../../../../src/components/_PasStyle/types'
import useDemoCTX from '../../../../src/hooks/useDemoCTX'

type Props = {
    showForm?:boolean
    setShowForm?:SetState<boolean>
}

const tags : Tags = [
    'ARTICLE', 
    'SECTION', 
    'ASIDE',
    'HEADER',
    'BODY',
    'DIV',
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

const Form = ({
    setShowForm,
    showForm
} : Props) => {

    const { theme } = useThemeCTX()
    const { globalOpen, setGlobalOpen, closeAll } = useUserExperienceCTX()
    const [ showCss, setShowCss ] = React.useState<boolean>(false)

    const { setStyle, style } = useDemoCTX()

    const open = () => {
        setGlobalOpen({
            ...globalOpen,
            formSelect:globalOpen.formSelect ? false : true
        })
    }

    const tratamentStyle = () : Array<string> => {

    const css = CreateStyle({...style}).split(';')

    const tratament = css.map(c => c.trim()).filter(
        (c, i, array) => 
            c !== 'undefined' && 
            c !== 'false' && 
            i !== 0 && 
            i !== 1 &&
            i !== 2 &&
            i !== array.length && 
            i !== array.length - 1 
        )

       return tratament
    }
    const OptionClick = (tag : any) => {
        setStyle({...style, tag : tag})
        setGlobalOpen({
            ...globalOpen,
            formSelect:false
        })
    }

    return(
    <PasStyle pd='40px' position='absolute' transform='translate(35vh, 5vh)'>
    <PasStyle
        mg='0px 30px 30px' 
        pd='20px'
        b_Radius='8px'
        shadow='2px 2px 10px black'
        bg={theme.colors.bg}
    >
        <PasStyle flex end
            w='100%'
        >
                <PasStyle onClick={() => setShowForm(false)}
                    tag='BUTTON'
                    bg='transparent'
                    color={theme.colors.white}
                    f_size='18px'
                    pd='10px'
                    transform='translate(20px, -20px)'
                    cursor='pointer'
                    border='none'
                    position='absolute'
                    _hover={{
                    transition: '1s',
                    color: theme.colors.red,
                }}> 
                    <MdClose />
                </PasStyle>
            </PasStyle>
        <PasStyle flex around
            mg='0px 30px 0px' 
            pd='8px'
            bg={theme.colors.bg}
            t_align='center'
        >
                <PasStyle
                    onClick={() => setShowCss(false)}
                    w='33%'
                    b_Bottom='solid 1px'
                    color={!showCss ? theme.colors.green : theme.colors.white}
                    cursor='pointer'
                    f_size='18px'
                    t_transform='uppercase'
                    _hover={{
                       transition: '1s',
                       color: theme.colors.green,
                   }}
                >
                    props
                </PasStyle>
                <PasStyle
                   w='33%'
                   bg={'transparent'}
                   b_Bottom='solid 1px'
                   color={theme.colors.white}
                   cursor='pointer'
                   f_size='18px'
                   t_transform='uppercase'
                   _hover={{
                       transition: '1s',
                       color: theme.colors.green,
                   }}
                >
                    hover
                </PasStyle>
                <PasStyle
                    w='33%'
                    onClick={() => setShowCss(true)}
                    b_Bottom='solid 1px'
                    t_transform='uppercase'
                    color={showCss ? theme.colors.green : theme.colors.white}
                    cursor='pointer'
                    f_size='18px'
                    _hover={{
                       transition: '1s',
                       color: theme.colors.green,
                   }}
                >
                    CSS
                </PasStyle>
            </PasStyle>
        <PasStyle mg='15px'>
            <Select 
                title='tag' 
                w='33%'
                wOptions='16%'
                transform='translate(25px, 5px)'
                onClick={open} 
                open={globalOpen.formSelect}
            >
                {tags.map((tag, index) =>
                    <Option 
                        key={index} 
                        value={tag} 
                        onClick={() => OptionClick(tag)}
                    >
                        {tag}
                    </Option>
                )}
            </Select>
        </PasStyle>
        <Container  grid rows='1fr'
            tag='FORM' 
            pd='10px'
            w='100vh' h='35vh'
        >
                {!showCss && 
                    <PasStyle grid columns='1fr 1fr 1fr'>
                        <Field 
                            prop='background:'
                            placeholder='bg='
                            onChange={(e:any) => setStyle({...style, bg:e.target.value})}
                            value={style.bg}
                            type='color'
                        />
                        <Field 
                            prop='padding:'
                            placeholder='pd='
                            onChange={(e:any) => setStyle({...style, pd:e.target.value})}
                            value={style.pd}
                        />
                        <Field 
                            prop='color:'
                            placeholder='color='
                            onChange={(e:any) => setStyle({...style, color:e.target.value})}
                            value={style.color}
                            type='color'
                        />
                        <Field 
                            prop='border:'
                            placeholder='border='
                            onChange={(e:any) => setStyle({...style, border:e.target.value})}
                            value={style.border}
                        />
                        <Field 
                            prop='border-color:'
                            placeholder='b_Color='
                            onChange={(e:any) => setStyle({...style, b_Color:e.target.value})}
                            value={style.b_Color}
                            type='color'
                        />
                        <Field 
                            prop='border-radius:'
                            placeholder='b_Radius='
                            onChange={(e:any) => setStyle({...style, b_Radius:e.target.value})}
                            value={style.b_Radius}
                        />
                        <Field 
                            prop='margin:'
                            placeholder='mg='
                            onChange={(e:any) => setStyle({...style, mg:e.target.value})}
                            value={style.mg}
                        />
                        <Field 
                            prop='box-shadow:'
                            placeholder='shadow='
                            onChange={(e:any) => setStyle({...style, shadow:e.target.value})}
                            value={style.shadow}
                        />
                        <Field 
                            prop='transform:'
                            placeholder='transform='
                            onChange={(e:any) => setStyle({...style, transform:e.target.value})}
                            value={style.transform}
                        />
                        <Field 
                            prop='font-size:'
                            placeholder='f_size='
                            onChange={(e:any) => setStyle({...style, f_size:e.target.value})}
                            value={style.f_size}
                        />
                        <Field 
                            prop='font-weight:'
                            placeholder='f_weight='
                            onChange={(e:any) => setStyle({...style, f_weight:e.target.value})}
                            value={style.f_weight}
                            type='number'
                        />
                        <Field 
                            prop='text-transform:'
                            placeholder='f_transform='
                            onChange={(e:any) => setStyle({...style, t_transform:e.target.value})}
                            value={style.t_transform}
                        />
                    </PasStyle>
                }
                {showCss && 
                    <Code copyId='css'>
                    {tratamentStyle().map((css, index) => 
                        <PasStyle key={css + index} color={theme.colors.cyan}>
                            {css &&
                                <>
                                    {css.split(':')[0]}
                                    <PasStyle tag='SPAN' color={theme.colors.pink}>
                                        :
                                    </PasStyle>
                                    <PasStyle tag='SPAN' color={theme.colors.purple}>
                                        {css.split(':')[1]}
                                    </PasStyle> 
                                    <PasStyle tag='SPAN' color={theme.colors.white}>
                                        ;
                                    </PasStyle>
                                </>
                            }
                        </PasStyle>
                    )}
                    </Code>
                }
            </Container>
        </PasStyle>
    </PasStyle>
    )
}

export default Form