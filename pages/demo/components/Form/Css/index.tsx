import * as React from 'react'
import Code from '../../../../../src/components/Code'
import Title from '../../../../../src/components/Title/indx'
import PasStyle from '../../../../../src/components/_PasStyle'
import CreateStyle from '../../../../../src/components/_PasStyle/CreateStyle/index.styles'
import { Styles } from '../../../../../src/components/_PasStyle/types'
import useDemoCTX from '../../../../../src/hooks/useDemoCTX'
import useThemeCTX from '../../../../../src/hooks/useThemeCTX'


type Tratament = {
    tratamentProps:Array<string>
    hover:Array<string>
}

const Css = () => {

    const { theme } = useThemeCTX()
    const { style, hover } = useDemoCTX()

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

    return(
        <>
         <PasStyle 
                tag='H3' 
                t_align='center'
                color={theme.colors.cyan}
                b_Bottom='solid 1px'
            >
                Props css
            </PasStyle>
            <Code copyId='css-props'>
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
            <PasStyle 
                tag='H3' 
                t_align='center'
                color={theme.colors.cyan}
                b_Bottom='solid 1px'
            >
                Hover css
            </PasStyle>
            <Code copyId='css-hover'>
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
        </>
    )
}

export default Css