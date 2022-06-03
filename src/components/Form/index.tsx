import * as React from 'react'
import useDemoCTX from '../../hooks/useDemoCTX'
import useThemeCTX from '../../hooks/useThemeCTX'
import Code from '../Code'
import Container from '../Layout/Container'
import CopyClipBoard from '../CopyClipBoard'
import Lorem from '../Lorem'
import PasStyle from "../_PasStyle"
import CreateStyle from '../_PasStyle/CreateStyle/index.styles'
import { Styles } from '../_PasStyle/types'
import Field from '../Field'

type Props = {
    
}

const Form = () => {

    const { theme } = useThemeCTX()
    const { style, setStyle } = useDemoCTX()

    const [ showCss, setShowCss ] = React.useState<boolean>(false)

    const tratamentStyle = () : Array<string> => {

    const css = CreateStyle({...style}).split(';')

    const tratament = css.map(c => c.trim()).filter(
        (c, i, array) => 
            c !== 'undefined' && 
            c !== 'false' && 
            i !== 0 && 
            i !== array.length && 
            i !== array.length - 1
        )
       
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

                <PasStyle grid columns='1fr 1fr 1fr'>
                    <Field 
                        prop='Props.tag:'
                        placeholder='tag='
                        
                    />
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
                {showCss && 
                    <Code copyId='css'>
                    CSS : <br /> 
                    {tratamentStyle().map((css, index) => 
                        <PasStyle key={css + index}>
                            {`${css ? `${css};`:css}`}
                        </PasStyle>
                    )}
                    </Code>
                }
        </PasStyle>
    </>
    )
}

export default Form