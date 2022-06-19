import * as React from 'react'
import Code from '../../../../../src/components/Code'
import PasStyle from '../../../../../src/_PasStyle'
import CreateStyle from '../../../../../src/_PasStyle/CreateStyle/index.styles'
import { PasStyleProps } from '../../../../../src/_PasStyle/utils/types'
import useDemoCTX from '../../../../../src/hooks/useDemoCTX'
import useThemeCTX from '../../../../../src/_PasStyle/Contexts/ThemeContext/useThemeCTX'

type Tratament = {
    tratamentProps:Array<string>
    hover:Array<string>
}

const Codes = () => {

    const { theme } = useThemeCTX()
    const { style, hover } = useDemoCTX()

    const [show, setShow] = React.useState<'hover' | 'props'>('props')

    const tratamentStyle = () : Tratament => {
    
        const tratament = (array : Array<string>) => { 
            return array.map(c => c.trim()).filter(
                (c, i, array) => 
                    c !== 'undefined' && 
                    c !== 'false' && 
                    i !== 0 && 
                    i !== 1 &&
                    i !== 2 &&
                    i !== array.length && 
                    i !== array.length - 1 
                )
        }
        
        return{
            tratamentProps:tratament(CreateStyle({...style}).split(';')),
            hover:tratament(CreateStyle({...hover}).split(';'))
        }
    }

    const BtnStyle : PasStyleProps = {
        tag:'BUTTON',
        type:'button',
        pd:'5px',
        mg:'5px',
        border:'none',
        cursor: 'pointer',
        b_radius: '8px',
        _hover:{
            transition: '1s',
            color:theme.colors.red,
            bg:theme.colors.darkGray
        }
    }
    
    return(
        <>
            <PasStyle flex
                mg='20px 15px 0px'
            >
                <PasStyle onClick={() => setShow('props')}
                    {...BtnStyle}
                    color={show === 'props' ? theme.colors.red : theme.colors.white}
                    bg={show === 'props' ? theme.colors.darkGray : theme.colors.bg}
                >
                    Props
                </PasStyle>
                <PasStyle onClick={() => setShow('hover')}
                    {...BtnStyle}
                    color={show === 'hover' ? theme.colors.red : theme.colors.white}
                    bg={show === 'hover' ? theme.colors.darkGray : theme.colors.bg}
                >
                    Hover
                </PasStyle>
            </PasStyle>
            {show === 'props' &&
                <Code>
                    <PasStyle
                        tag='SPAN'
                        color={theme.colors.green}
                    >
                        CSS : 
                    </PasStyle>
                    {tratamentStyle().tratamentProps.map((css, index) => 
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
            {show === 'hover' &&   
                <Code>
                    <PasStyle
                        tag='SPAN'
                        color={theme.colors.green}
                    >
                        CSS : 
                    </PasStyle>
                    {tratamentStyle().hover.map((css, index) => 
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
        </>
    )
}

export default Codes