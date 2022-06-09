import * as React from 'react'
import Code from '../../../../../src/components/Code'
import PasStyle from '../../../../../src/components/_PasStyle'
import CreateStyle from '../../../../../src/components/_PasStyle/CreateStyle/index.styles'
import useDemoCTX from '../../../../../src/hooks/useDemoCTX'
import useThemeCTX from '../../../../../src/hooks/useThemeCTX'


const Css = () => {

    const { theme } = useThemeCTX()
    const { style } = useDemoCTX()

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
    return(
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
    )
}

export default Css