import * as React from 'react'
import Aside from '../Aside'
import Container from '../Container'
import Title from '../../Title'
import { PasStyleProps } from '../../../_PasStyle/types'
import useThemeCTX from '../../../hooks/useThemeCTX'
import useUserExperienceCTX from '../../../hooks/useUserExperienceCTX'

type Props = {
    children:React.ReactNode
    titleContent:React.ReactNode
    text:React.ReactNode
}

const Content = (props:PasStyleProps<Props>) => {

    const { children, titleContent, text } = props
   
    const { theme } = useThemeCTX()

    return(
        <Container {...props} grid columns='1fr 1fr'  
            animation='show'
        > 
            <Container 
                tag='ARTICLE'
            >
                <Title>
                    {titleContent}
                </Title>
                {children}
            </Container>
            <Aside>
                {text}
            </Aside>
        </Container>
    )
}

export default Content