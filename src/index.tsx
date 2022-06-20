import * as React from 'react'
import Emotion from './index.styles'
import { PasStyleProps } from '../utils/types'

const PasStyle = {
    Div(props:PasStyleProps) {
        return <Emotion.StyleDiv {...props} />
    },
    Input(props:PasStyleProps) {
        return <Emotion.StyleInput {...props} />
    },
    Article(props:PasStyleProps) {
        return <Emotion.StyleArticle {...props} />
    },
    Aside(props:PasStyleProps) {
        return <Emotion.StyleAside {...props} />
    },
    Header(props:PasStyleProps) {
        return <Emotion.StyleHeader {...props} />
    },
    Main(props:PasStyleProps) {
        return <Emotion.StyleMain {...props} />
    },
    Footer(props:PasStyleProps) {
        return <Emotion.StyleFooter {...props} />
    },
    Body(props:PasStyleProps) {
        return <Emotion.StyleBody {...props} />
    },
    Form(props:PasStyleProps) {
        return <Emotion.StyleForm {...props} />
    },
    Section(props:PasStyleProps) {
        return <Emotion.StyleSection {...props} />
    },
    Button(props:PasStyleProps) {
        return <Emotion.StyleButton {...props} />
    },
    Nav(props:PasStyleProps) {
        return <Emotion.StyleNav {...props} />
    },
    Span(props:PasStyleProps) {
        return <Emotion.StyleSpan {...props} />
    },
    H1(props:PasStyleProps) {
        return <Emotion.StyleH1 {...props} />
    },
    H2(props:PasStyleProps) {
        return <Emotion.StyleH2 {...props} />
    },
    H3(props:PasStyleProps) {
        return <Emotion.StyleH3 {...props} />
    },
    H4(props:PasStyleProps) {
        return <Emotion.StyleH4 {...props} />
    },
    H5(props:PasStyleProps) {
        return <Emotion.StyleH5 {...props} />
    },
    H6(props:PasStyleProps) {
        return <Emotion.StyleH6 {...props} />
    },
    P(props:PasStyleProps) {
        return <Emotion.StyleP {...props} />
    },
    Table(props:PasStyleProps) {
        return <Emotion.StyleTable {...props} />
    },
    Thead(props:PasStyleProps) {
        return <Emotion.StyleThead {...props} />
    },
    Tbody(props:PasStyleProps) {
        return <Emotion.StyleTbody {...props} />
    },
    Tfoot(props:PasStyleProps) {
        return <Emotion.StyleTfoot {...props} />
    },
    Tr(props:PasStyleProps) {
        return <Emotion.StyleTr {...props} />
    },
    Td(props:PasStyleProps) {
        return <Emotion.StyleTd {...props} />
    },
    Th(props:PasStyleProps) {
        return <Emotion.StyleTh {...props} />
    },
    Img(props:PasStyleProps) {
        return <Emotion.StyleImg {...props} />
    },
    A(props:PasStyleProps) {
        return <Emotion.StyleA {...props} />
    },
    Code(props:PasStyleProps) {
        return <Emotion.StyleCode {...props} />
    },
    Label(props:PasStyleProps) {
        return <Emotion.StyleLabel {...props} />
    },
    Iframe(props:PasStyleProps) {
        return <Emotion.StyleIframe {...props} />
    },
}


export default PasStyle