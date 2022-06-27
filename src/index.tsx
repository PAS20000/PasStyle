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

const passtylePropsOBJ : PasStyleProps = {
    grid:undefined,
    flex:undefined,
    between:undefined,
    around:undefined,
    evenly:undefined,
    start:undefined,
    center:undefined,
    end:undefined,
    column:undefined,
    columns:undefined,
    rows:undefined,
    bg:undefined,
    pd:undefined,
    w:undefined,
    h:undefined,
    mg:undefined,
    border:undefined,
    b_radius:undefined,
    b_color:undefined,
    target:undefined,
    animation:undefined,
    f_size:undefined,
    f_weight:undefined,
    f_family:undefined,
    t_transform:undefined,
    t_decoration:undefined,
    t_align:undefined,
    transform:undefined,
    transition:undefined,
    op:undefined,
    pd_bottom:undefined,  
    pd_left:undefined, 
    pd_top:undefined, 
    pd_right:undefined,
    mg_bottom:undefined,  
    mg_left:undefined,  
    mg_top:undefined,   
    mg_right:undefined,  
    shadow:undefined,
    _media:undefined,
    _hover:undefined,
    _focus:undefined,
    color:undefined,
    cursor:undefined,
    position:undefined,
    outline:undefined,
    outline_color:undefined,
    z:undefined,
    unselectableText:undefined,
    _webkit:undefined,
    display:undefined,
    p_Events:undefined,
    b_bottom:undefined,
    b_left:undefined,
    b_right:undefined,
    b_top:undefined,
}

const clearProps = (props:PasStyleProps) : Object => {
    return {...props, ...passtylePropsOBJ}
}

const PasStyle = {
    Div(props:PasStyleProps) {

        const { Style } = useEvents({...props}, 'DIV')

        return <div {...clearProps(props)} data-passtyle='DIV' style={Style} />
    },
    Input(props:PasStyleProps<InputAttr>) {

        const { Style } = useEvents({...props}, 'INPUT')

        return <input  {...clearProps(props)} data-passtyle='INPUT' style={Style} />
    },
    Article(props:PasStyleProps) {

        const { Style } = useEvents({...props}, 'ARTICLE')

        return <article {...clearProps(props)} data-passtyle='ARTICLE' style={Style} />
    },
    Aside(props:PasStyleProps) {

        const { Style } = useEvents({...props}, 'ASIDE')

        return <aside {...clearProps(props)} data-passtyle='ASIDE' style={Style} />
    },
    Header(props:PasStyleProps) {

        const { Style } = useEvents({...props}, 'HEADER')

        return <header {...clearProps(props)} data-passtyle='HEADER' style={Style} />
    },
    Main(props:PasStyleProps) {

        const { Style } = useEvents({...props}, 'MAIN')

        return <main {...clearProps(props)} data-passtyle='MAIN' style={Style} />
    },
    Footer(props:PasStyleProps) {

        const { Style } = useEvents({...props}, 'FOOTER')

        return <footer {...clearProps(props)} data-passtyle='FOOTER' style={Style} />
    },
    Body(props:PasStyleProps) {

        const { Style } = useEvents({...props}, 'BODY')

        return <body {...clearProps(props)} data-passtyle='BODY' style={Style} />
    },
    Form(props:PasStyleProps<FormAttr>) {

        const { Style } = useEvents({...props}, 'FORM')

        return <form {...clearProps(props)} data-passtyle='FORM' style={Style} />
    },
    Section(props:PasStyleProps) {

        const { Style } = useEvents({...props}, 'SECTION')

        return <section {...clearProps(props)} data-passtyle='SECTION' style={Style} />
    },
    Button(props:PasStyleProps<ButtonAttr>) {

        const { Style } = useEvents({...props}, 'BUTTON')

        return <button {...clearProps(props)} data-passtyle='BUTTON'style={Style} />
    },
    Nav(props:PasStyleProps) {

        const { Style } = useEvents({...props}, 'NAV')

        return <nav {...clearProps(props)} data-passtyle='NAV' style={Style} />
    },
    Span(props:PasStyleProps) {

        const { Style } = useEvents({...props}, 'SPAN')

        return <span {...clearProps(props)} data-passtyle='SPAN' style={Style} />
    },
    H1(props:PasStyleProps) {

        const { Style } = useEvents({...props}, 'H1')

        return <h1 {...clearProps(props)} data-passtyle='H1' style={Style} />
    },
    H2(props:PasStyleProps) {

        const { Style } = useEvents({...props}, 'H2')

        return <h2 {...clearProps(props)} data-passtyle='H2' style={Style} />
    },
    H3(props:PasStyleProps) {

        const { Style } = useEvents({...props}, 'H3')

        return <h3 {...clearProps(props)} data-passtyle='H3' style={Style} />
    },
    H4(props:PasStyleProps) {

        const { Style } = useEvents({...props}, 'H4')

        return <h4 {...clearProps(props)} data-passtyle='H4' style={Style} />
    },
    H5(props:PasStyleProps) {

        const { Style } = useEvents({...props}, 'H5')

        return <h5 {...clearProps(props)} data-passtyle='H5' style={Style} />
    },
    H6(props:PasStyleProps) {

        const { Style } = useEvents({...props}, 'H6')

        return <h6 {...clearProps(props)} data-passtyle='H6' style={Style} />
    },
    P(props:PasStyleProps) {

        const { Style } = useEvents({...props}, 'P')

        return <p {...clearProps(props)} data-passtyle='P' style={Style} />
    },
    Table(props:PasStyleProps<TableAttr>) {

        const { Style } = useEvents({...props}, 'TABLE')

        return <table {...clearProps(props)} data-passtyle='TABLE' style={Style} />
    },
    Thead(props:PasStyleProps) {

        const { Style } = useEvents({...props}, 'THEAD')

        return <thead {...clearProps(props)} data-passtyle='THEAD' style={Style} />
    },
    Tbody(props:PasStyleProps) {

        const { Style } = useEvents({...props}, 'TBODY')

        return <tbody {...clearProps(props)} data-passtyle='TBODY' style={Style} />
    },
    Tfoot(props:PasStyleProps) {

        const { Style } = useEvents({...props}, 'TFOOT')

        return <tfoot {...clearProps(props)} data-passtyle='TFOOT' style={Style} />
    },
    Tr(props:PasStyleProps<TrAttr>) {

        const { Style } = useEvents({...props}, 'TR')

        return <tr {...clearProps(props)} data-passtyle='TR' style={Style} />
    },
    Td(props:PasStyleProps<TdAttr>) {

        const { Style } = useEvents({...props}, 'TD')

        return <td {...clearProps(props)} data-passtyle='TD' style={Style} />
    },
    Th(props:PasStyleProps<ThAttr>) {

        const { Style } = useEvents({...props}, 'TH')

        return <th {...clearProps(props)} data-passtyle='TH' style={Style} />
    },
    Img(props:PasStyleProps<ImgAttr>) {

        const { Style } = useEvents({...props}, 'IMG')

        return <img {...clearProps(props)} data-passtyle='IMG' style={Style} />
    },
    A(props:PasStyleProps<AnchorAttr>) {

        const { Style } = useEvents({...props}, 'A')

        return <a {...clearProps(props)} data-passtyle='A' style={Style} />
    },
    Code(props:PasStyleProps) {

        const { Style } = useEvents({...props}, 'CODE')

        return <code {...clearProps(props)} data-passtyle='CODE' style={Style} />
    },
    Label(props:PasStyleProps<LabelAttr>) {

        const { Style } = useEvents({...props}, 'LABEL')

        return <label {...clearProps(props)} data-passtyle='LABEL' style={Style} />
    },
    Iframe(props:PasStyleProps<IframeAttr>) {

        const { Style } = useEvents({...props}, 'IFRAME')

        return <iframe {...clearProps(props)} data-passtyle='IFRAME' style={Style} />
    },
    TextArea(props:PasStyleProps<TextareaAttr>) {

        const { Style } = useEvents({...props}, 'TEXTAREA')

        return <textarea {...clearProps(props)} data-passtyle='TEXTAREA' style={Style} />
    },
    Dialog(props:PasStyleProps<DialogAttr>){

        const { Style } = useEvents({...props}, 'DIALOG')

        return <dialog {...clearProps(props)} data-passtyle='DIALOG' style={Style} />
    }
}

export default PasStyle