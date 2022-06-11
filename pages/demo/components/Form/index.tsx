import * as React from 'react'
import useThemeCTX from '../../../../src/hooks/useThemeCTX'
import PasStyle from "../../../../src/components/_PasStyle"
import { SetState } from '../../../../src/contexts/types'
import Container from '../../../../src/components/Layout/Container'
import { MdClose } from 'react-icons/md'
import Css from './Css'
import Router from './Router'
import Selects from './Selects'
import Inputs from './Inputs'

type Props = {
    showForm?:boolean
    setShowForm?:SetState<boolean>
}

export type ShowState = 'css' | 'hover' | 'props'

const Form = ({
    setShowForm,
    showForm
} : Props) => {

    const { theme } = useThemeCTX()
    const [ show, setShow ] = React.useState<ShowState>('props')

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
        <Selects show={show}/>
            <Container  grid rows='1fr'
                tag='FORM' 
                pd='10px'
                w='100vh' 
            >
                {show !== 'css' && 
                    <PasStyle grid columns='1fr 1fr 1fr'>
                        {show === 'props' && <Inputs />}
                        {show === 'hover' && <Inputs _hover/>}
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