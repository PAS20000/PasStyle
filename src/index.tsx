import * as React from 'react'
import { PasProps, Styles } from '../utils/types'
import Emotion from './index.styles'

export type AllAttr =  React.HTMLAttributes<any>

export type PasStyleProps <T = {}> = T & Styles & PasProps & AllAttr

export type InputAttr <T = {}> = React.InputHTMLAttributes<T>

export type ButtonAttr <T = {}> = React.ButtonHTMLAttributes<T>

export type FormAttr <T = {}> = React.FormHTMLAttributes<T>

export type TableAttr <T = {}> = React.TableHTMLAttributes<T>

export type TrAttr <T = {}> = React.TrackHTMLAttributes<T>

export type TdAttr <T = {}> = React.TdHTMLAttributes<T>

export type ThAttr <T = {}> = React.ThHTMLAttributes<T>

export type ImgAttr <T = {}> = React.ImgHTMLAttributes<T>

export type AnchorAttr <T = {}> = React.AnchorHTMLAttributes<T>

export type LabelAttr <T = {}> = React.LabelHTMLAttributes<T>

export type IframeAttr <T = {}> = React.IframeHTMLAttributes<T>

export type TextareaAttr <T = {}> = React.TextareaHTMLAttributes<T>

const PasStyle = {
    Div(props:PasStyleProps) {
        return <Emotion.StyleDiv {...props} />
    },
    Input(props:PasStyleProps<InputAttr>) {
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
    Form(props:PasStyleProps<FormAttr>) {
        return <Emotion.StyleForm {...props} />
    },
    Section(props:PasStyleProps) {
        return <Emotion.StyleSection {...props} />
    },
    Button(props:PasStyleProps<ButtonAttr>) {
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
    Table(props:PasStyleProps<TableAttr>) {
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
    Tr(props:PasStyleProps<TrAttr>) {
        return <Emotion.StyleTr {...props} />
    },
    Td(props:PasStyleProps<TdAttr>) {
        return <Emotion.StyleTd {...props} />
    },
    Th(props:PasStyleProps<ThAttr>) {
        return <Emotion.StyleTh {...props} />
    },
    Img(props:PasStyleProps<ImgAttr>) {
        return <Emotion.StyleImg {...props} />
    },
    A(props:PasStyleProps<AnchorAttr>) {
        return <Emotion.StyleA {...props} />
    },
    Code(props:PasStyleProps) {
        return <Emotion.StyleCode {...props} />
    },
    Label(props:PasStyleProps<LabelAttr>) {
        return <Emotion.StyleLabel {...props} />
    },
    Iframe(props:PasStyleProps<IframeAttr>) {
        return <Emotion.StyleIframe {...props} />
    },
    TextArea(props:PasStyleProps<TextareaAttr>) {
        return <Emotion.StyleTextArea {...props} />
    },
}


export default PasStyle