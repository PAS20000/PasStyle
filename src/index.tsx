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

export type DialogAttr <T = {}> = React.DialogHTMLAttributes<T>

export type TextareaAttr <T = {}> = React.TextareaHTMLAttributes<T>

const useEvents = (props:PasStyleProps, tag:string) => {

    const [hover, setHover] = React.useState<boolean>(false)
    const [focus, setFocus] = React.useState<boolean>(false)

    const { grid, 
            flex,
            evenly,
            around,
            between,
            start, 
            end,
            center,
            column, 
            columns,
            rows,
            bg,
            shadow,
            b_bottom, 
            b_color, 
            b_left, 
            b_top, 
            b_radius,
            b_right,
            pd,
            pd_bottom,  
            pd_left, 
            pd_top, 
            pd_radius,
            pd_right,
            mg,
            mg_bottom,  
            mg_left, 
            mg_top, 
            mg_radius,
            mg_right,
            _hover,
            _focus,
            _media 
        } = props

    const defaultCSS = {
        display: grid ? 'grid':'flex',
        flexWrap:'wrap',
        flexDirection:'row' ?? 'row',
        gridTemplateColumns: '',
        gridTemplateRows: '',
        animation: 'show 1s ease-in',
    } as React.CSSProperties

    const hoverCSS = {
        ...defaultCSS,
        ..._hover,
    }

    const focusCSS = {
        ...defaultCSS,
        ..._focus,
    }

    const Style = () => {
        if(!focus && !hover){
            return defaultCSS
        }
        if(focus){
            return focusCSS
        }
        if(hover){
            return hoverCSS
        }
    }

    React.useEffect(() => {
        const element = document.querySelector(`[data-passtyle=${tag}]`) as HTMLElement
        element.addEventListener('mouseenter', () => setHover(true))
        element.addEventListener('mouseleave', () => setHover(false))
        element.addEventListener('click', () => setFocus(true))

        return () => {
            element.removeEventListener('mouseenter', () => setHover(true))
            element.removeEventListener('mouseenter', () => setHover(false))
            element.removeEventListener('click', () => setFocus(true))
        }
    }, [])

    return {
        Style:Style()
    }

}

const PasStyle = {
    Div(props:PasStyleProps) {

        const { Style } = useEvents({...props}, 'DIV')

        return <div {...props} data-passtyle='DIV' style={Style}/>
    },
    Input(props:PasStyleProps<InputAttr>) {
        return <input {...props} data-passtyle='INPUT' />
    },
    Article(props:PasStyleProps) {
        return <article {...props} data-passtyle='ARTICLE' />
    },
    Aside(props:PasStyleProps) {
        return <aside {...props} data-passtyle='ASIDE' />
    },
    Header(props:PasStyleProps) {
        return <header {...props} data-passtyle='HEADER' />
    },
    Main(props:PasStyleProps) {
        return <main {...props} data-passtyle='MAIN' />
    },
    Footer(props:PasStyleProps) {
        return <footer {...props} data-passtyle='FOOTER' />
    },
    Body(props:PasStyleProps) {
        return <body {...props} data-passtyle='BODY' />
    },
    Form(props:PasStyleProps<FormAttr>) {
        return <form {...props} data-passtyle='FORM' />
    },
    Section(props:PasStyleProps) {
        return <section {...props} data-passtyle='SECTION' />
    },
    Button(props:PasStyleProps<ButtonAttr>) {
        return <button {...props} data-passtyle='BUTTON'/>
    },
    Nav(props:PasStyleProps) {
        return <nav {...props} data-passtyle='NAV' />
    },
    Span(props:PasStyleProps) {
        return <span {...props} data-passtyle='SPAN' />
    },
    H1(props:PasStyleProps) {
        return <h1 {...props} data-passtyle='H1' />
    },
    H2(props:PasStyleProps) {
        return <h2 {...props} data-passtyle='H2' />
    },
    H3(props:PasStyleProps) {
        return <h3 {...props} data-passtyle='H3' />
    },
    H4(props:PasStyleProps) {
        return <h4 {...props} data-passtyle='H4' />
    },
    H5(props:PasStyleProps) {
        return <h5 {...props} data-passtyle='H5' />
    },
    H6(props:PasStyleProps) {
        return <h6 {...props} data-passtyle='H6' />
    },
    P(props:PasStyleProps) {
        return <p {...props} data-passtyle='P' />
    },
    Table(props:PasStyleProps<TableAttr>) {
        return <table {...props} data-passtyle='TABLE' />
    },
    Thead(props:PasStyleProps) {
        return <thead {...props} data-passtyle='THEAD' />
    },
    Tbody(props:PasStyleProps) {
        return <tbody {...props} data-passtyle='TABODY' />
    },
    Tfoot(props:PasStyleProps) {
        return <tfoot {...props} data-passtyle='TFOOT' />
    },
    Tr(props:PasStyleProps<TrAttr>) {
        return <tr {...props} data-passtyle='TR' />
    },
    Td(props:PasStyleProps<TdAttr>) {
        return <td {...props} data-passtyle='TD' />
    },
    Th(props:PasStyleProps<ThAttr>) {
        return <th {...props} data-passtyle='TH' />
    },
    Img(props:PasStyleProps<ImgAttr>) {
        return <img {...props} data-passtyle='IMG' />
    },
    A(props:PasStyleProps<AnchorAttr>) {
        return <a {...props} data-passtyle='A' />
    },
    Code(props:PasStyleProps) {
        return <code {...props} data-passtyle='CODE' />
    },
    Label(props:PasStyleProps<LabelAttr>) {
        return <label {...props} data-passtyle='LABEL' />
    },
    Iframe(props:PasStyleProps<IframeAttr>) {
        return <iframe {...props} data-passtyle='IFRAME' />
    },
    TextArea(props:PasStyleProps<TextareaAttr>) {
        return <textarea {...props} data-passtyle='TEXTAREA' />
    },
    Dialog(props:PasStyleProps<DialogAttr>){
        return <dialog {...props} data-passtyle='DIALOG' />
    }
}

export default PasStyle