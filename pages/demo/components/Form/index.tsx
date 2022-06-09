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
import useDemoCTX from '../../../../src/hooks/useDemoCTX'
import Css from './Css'
import Router from './Router'
import Selects from './Selects'

type Props = {
    showForm?:boolean
    setShowForm?:SetState<boolean>
}

const Form = ({
    setShowForm,
    showForm
} : Props) => {

    const { theme } = useThemeCTX()
    const { globalOpen, setGlobalOpen } = useUserExperienceCTX()
    const [ show, setShow ] = React.useState<'css' | 'hover' | 'props'>('props')

    const { setStyle, style } = useDemoCTX()


    return(
    <PasStyle 
        position='absolute' 
        transform='translate(40vh, 10vh)'
    >
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
        
        <Router 
            setShow={setShow}
            show={show}
        />
        <Selects />
        <Container  grid rows='1fr'
            tag='FORM' 
            pd='10px'
            w='100vh' h='35vh'
        >
                {show === 'props' && 
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
                {show === 'css' && 
                  <Css />
                }
            </Container>
        </PasStyle>
    </PasStyle>
    )
}

export default Form