import * as React from 'react'
import { PasProps, Styles } from '../utils/types'
import useEvents from './index.styles'

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

export type DialogAttr <T = {}> = React.DialogHTMLAttributes<T>

export type TextareaAttr <T = {}> = React.TextareaHTMLAttributes<T>

const PasStyle = {
    Div(props:PasStyleProps) {

        const { Style } = useEvents({...props}, 'DIV')

        const { _focus, _hover, _media, b_bottom} = props

        return <div {...props} data-passtyle='DIV' style={Style} />
    },
    Input(props:PasStyleProps<InputAttr>) {

        const { Style } = useEvents({...props}, 'INPUT')

        return <input {...props} data-passtyle='INPUT' style={Style} />
    },
    Article(props:PasStyleProps) {

        const { Style } = useEvents({...props}, 'ARTICLE')

        return <article {...props} data-passtyle='ARTICLE' style={Style} />
    },
    Aside(props:PasStyleProps) {

        const { Style } = useEvents({...props}, 'ASIDE')

        return <aside {...props} data-passtyle='ASIDE' style={Style} />
    },
    Header(props:PasStyleProps) {

        const { Style } = useEvents({...props}, 'HEADER')

        return <header {...props} data-passtyle='HEADER' style={Style} />
    },
    Main(props:PasStyleProps) {

        const { Style } = useEvents({...props}, 'MAIN')

        return <main {...props} data-passtyle='MAIN' style={Style} />
    },
    Footer(props:PasStyleProps) {

        const { Style } = useEvents({...props}, 'FOOTER')

        return <footer {...props} data-passtyle='FOOTER' style={Style} />
    },
    Body(props:PasStyleProps) {

        const { Style } = useEvents({...props}, 'BODY')

        return <body {...props} data-passtyle='BODY' style={Style} />
    },
    Form(props:PasStyleProps<FormAttr>) {

        const { Style } = useEvents({...props}, 'FORM')

        return <form {...props} data-passtyle='FORM' style={Style} />
    },
    Section(props:PasStyleProps) {

        const { Style } = useEvents({...props}, 'SECTION')

        return <section {...props} data-passtyle='SECTION' style={Style} />
    },
    Button(props:PasStyleProps<ButtonAttr>) {

        const { Style } = useEvents({...props}, 'BUTTON')

        return <button {...props} data-passtyle='BUTTON'style={Style} />
    },
    Nav(props:PasStyleProps) {

        const { Style } = useEvents({...props}, 'NAV')

        return <nav {...props} data-passtyle='NAV' style={Style} />
    },
    Span(props:PasStyleProps) {

        const { Style } = useEvents({...props}, 'SPAN')

        return <span {...props} data-passtyle='SPAN' style={Style} />
    },
    H1(props:PasStyleProps) {

        const { Style } = useEvents({...props}, 'H1')

        return <h1 {...props} data-passtyle='H1' style={Style} />
    },
    H2(props:PasStyleProps) {

        const { Style } = useEvents({...props}, 'H2')

        return <h2 {...props} data-passtyle='H2' style={Style} />
    },
    H3(props:PasStyleProps) {

        const { Style } = useEvents({...props}, 'H3')

        return <h3 {...props} data-passtyle='H3' style={Style} />
    },
    H4(props:PasStyleProps) {

        const { Style } = useEvents({...props}, 'H4')

        return <h4 {...props} data-passtyle='H4' style={Style} />
    },
    H5(props:PasStyleProps) {

        const { Style } = useEvents({...props}, 'H5')

        return <h5 {...props} data-passtyle='H5' style={Style} />
    },
    H6(props:PasStyleProps) {

        const { Style } = useEvents({...props}, 'H6')

        return <h6 {...props} data-passtyle='H6' style={Style} />
    },
    P(props:PasStyleProps) {

        const { Style } = useEvents({...props}, 'P')

        return <p {...props} data-passtyle='P' style={Style} />
    },
    Table(props:PasStyleProps<TableAttr>) {

        const { Style } = useEvents({...props}, 'TABLE')

        return <table {...props} data-passtyle='TABLE' style={Style} />
    },
    Thead(props:PasStyleProps) {

        const { Style } = useEvents({...props}, 'THEAD')

        return <thead {...props} data-passtyle='THEAD' style={Style} />
    },
    Tbody(props:PasStyleProps) {

        const { Style } = useEvents({...props}, 'TBODY')

        return <tbody {...props} data-passtyle='TBODY' style={Style} />
    },
    Tfoot(props:PasStyleProps) {

        const { Style } = useEvents({...props}, 'TFOOT')

        return <tfoot {...props} data-passtyle='TFOOT' style={Style} />
    },
    Tr(props:PasStyleProps<TrAttr>) {

        const { Style } = useEvents({...props}, 'TR')

        return <tr {...props} data-passtyle='TR' style={Style} />
    },
    Td(props:PasStyleProps<TdAttr>) {

        const { Style } = useEvents({...props}, 'TD')

        return <td {...props} data-passtyle='TD' style={Style} />
    },
    Th(props:PasStyleProps<ThAttr>) {

        const { Style } = useEvents({...props}, 'TH')

        return <th {...props} data-passtyle='TH' style={Style} />
    },
    Img(props:PasStyleProps<ImgAttr>) {

        const { Style } = useEvents({...props}, 'IMG')

        return <img {...props} data-passtyle='IMG' style={Style} />
    },
    A(props:PasStyleProps<AnchorAttr>) {

        const { Style } = useEvents({...props}, 'A')

        return <a {...props} data-passtyle='A' style={Style} />
    },
    Code(props:PasStyleProps) {

        const { Style } = useEvents({...props}, 'CODE')

        return <code {...props} data-passtyle='CODE' style={Style} />
    },
    Label(props:PasStyleProps<LabelAttr>) {

        const { Style } = useEvents({...props}, 'LABEL')

        return <label {...props} data-passtyle='LABEL' style={Style} />
    },
    Iframe(props:PasStyleProps<IframeAttr>) {

        const { Style } = useEvents({...props}, 'IFRAME')

        return <iframe {...props} data-passtyle='IFRAME' style={Style} />
    },
    TextArea(props:PasStyleProps<TextareaAttr>) {

        const { Style } = useEvents({...props}, 'TEXTAREA')

        return <textarea {...props} data-passtyle='TEXTAREA' style={Style} />
    },
    Dialog(props:PasStyleProps<DialogAttr>){

        const { Style } = useEvents({...props}, 'DIALOG')

        return <dialog {...props} data-passtyle='DIALOG' style={Style} />
    }
}

export default PasStyle