import * as React from 'react'
import useDemoCTX from '../../../../src/hooks/useDemoCTX'
import useThemeCTX from '../../../../src/hooks/useThemeCTX'
import Code from '../../../../src/components/Code'
import PasStyle from "../../../../src/components/_PasStyle"
import CreateStyle from '../../../../src/components/_PasStyle/CreateStyle/index.styles'
import Field from '../../../../src/components/Field'
import Select from '../../../../src/components/Select'
import Option from '../../../../src/components/Select/Option'
import useUserExperienceCTX from '../../../../src/hooks/useUserExperienceCTX'

type Props = {
    
}

const tags = [
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

const Form = () => {

    const { theme } = useThemeCTX()
    const { style, setStyle } = useDemoCTX()
    const { globalOpen, setGlobalOpen, closeAll } = useUserExperienceCTX()
    const [ showCss, setShowCss ] = React.useState<boolean>(false)

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
       console.log(tratament)
       return tratament
    }

    return(
    <>   
        <PasStyle  grid rows='1fr'
            tag='FORM' 
            mg='30px' 
            pd='15px'
            b_Radius='8px'
            shadow={`5px 5px 5px 1px #0000006c`}
            bg={theme.colors.bg}
        >
                    <Select title='Props.tag' w='200px' onClick={open} open={globalOpen.formSelect}>
                        {tags.map((tag, index) =>
                            <Option key={index} value={tag}>
                                {tag}
                            </Option>
                        )}
                    </Select>
                <PasStyle grid columns='1fr 1fr 1fr' onClick={() => closeAll()}>
                    <Field 
                        prop='Props.background:'
                        placeholder='bg='
                        onChange={(e:any) => setStyle({...style, bg:e.target.value})}
                        value={style.bg}
                    />
                    <Field 
                        prop='Props.padding:'
                        placeholder='pd='
                        onChange={(e:any) => setStyle({...style, pd:e.target.value})}
                        value={style.pd}
                    />
                    <Field 
                        prop='Props.color:'
                        placeholder='color='
                        onChange={(e:any) => setStyle({...style, color:e.target.value})}
                        value={style.color}
                    />
                    <Field 
                        prop='Props.border:'
                        placeholder='border='
                        onChange={(e:any) => setStyle({...style, border:e.target.value})}
                        value={style.border}
                    />
                    <Field 
                        prop='Props.border-color:'
                        placeholder='b_color='
                        onChange={(e:any) => setStyle({...style, b_Color:e.target.value})}
                        value={style.b_Color}
                    />
                    <Field 
                        prop='Props.border-radius:'
                        placeholder='b_Radius='
                        onChange={(e:any) => setStyle({...style, b_Radius:e.target.value})}
                        value={style.b_Radius}
                    />
                    <Field 
                        prop='Props.margin:'
                        placeholder='mg='
                        onChange={(e:any) => setStyle({...style, mg:e.target.value})}
                        value={style.mg}
                    />
                    <Field 
                        prop='Props.box-shadow:'
                        placeholder='shadow='
                        onChange={(e:any) => setStyle({...style, shadow:e.target.value})}
                        value={style.shadow}
                    />
                    <Field 
                        prop='Props.transform:'
                        placeholder='transform='
                        onChange={(e:any) => setStyle({...style, transform:e.target.value})}
                        value={style.transform}
                    />
                    <Field 
                        prop='Props.font-size:'
                        placeholder='f_size='
                        onChange={(e:any) => setStyle({...style, f_size:e.target.value})}
                        value={style.f_size}
                    />
                    <Field 
                        prop='Props.font-weight:'
                        placeholder='f_weight='
                        onChange={(e:any) => setStyle({...style, f_weight:e.target.value})}
                        value={style.f_weight}
                    />
                </PasStyle>
                {!showCss && 
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
        </PasStyle>
    </>
    )
}

export default Form