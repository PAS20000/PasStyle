import * as React from 'react'
import PasStyle from "../../../../src/_PasStyle"
import { SetState } from '../../../../src/contexts/types'
import Container from '../../../../src/components/Layout/Container'
import Router from './Router'
import Selects from './Selects'
import Inputs from './Inputs'
import Codes from './Codes'
import { ShowState } from '../..'
import useThemeCTX from '../../../../src/_PasStyle/Contexts/ThemeContext/useThemeCTX'

type Props = {
    showForm?:boolean
    setState?:SetState<boolean>
    show:ShowState
    setShow:SetState<ShowState>
}



const Form = ({
    setState,
    showForm,
    show,
    setShow
} : Props) => {

    const { theme } = useThemeCTX()
    

    return(
    <>
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
                        {show === 'props' && <Inputs  props/>}
                        {show === 'hover' && <Inputs _hover/>}
                        {show === 'create' && <Inputs create/>}
                    </PasStyle>
                }
                {show === 'css' && 
                  <Codes />
                }
            </Container>
        </>
    )
}

export default Form