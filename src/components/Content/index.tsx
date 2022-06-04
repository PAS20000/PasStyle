import * as React from 'react'
import Code from '../Code'
import Aside from '../Layout/Aside'
import Container from '../Layout/Container'
import Lorem from '../Lorem'
import Title from '../Title/indx'


const Content = ({
    title,
    text,
    children
}) => {

    return(
        <Container grid columns='1fr 1fr' 
        tag='DIV'
        >
        <Container 
            tag='ARTICLE'
        >
            <Title>
                {title}
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