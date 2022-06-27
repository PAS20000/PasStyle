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

const useClear = (props:PasStyleProps) : Object => {
    const [ClearProps, setClearProps] = React.useState<Object>({})

    React.useMemo(() => {
        setClearProps({...props, ...passtylePropsOBJ})
    }, [props, passtylePropsOBJ])

    return ClearProps
}

const PasStyle = {
    Div(props:PasStyleProps) {
        const Clear = useClear(props)
        const { Style } = useEvents({...props}, 'DIV')

        return <div {...Clear} data-passtyle='DIV' style={Style} />
    },
    Input(props:PasStyleProps<InputAttr>) {
        const Clear = useClear(props)
        const { Style } = useEvents({...props}, 'INPUT')

        return <input {...Clear} data-passtyle='INPUT' style={Style} />
    },
    Article(props:PasStyleProps) {
        const Clear = useClear(props)
        const { Style } = useEvents({...props}, 'ARTICLE')

        return <article {...Clear} data-passtyle='ARTICLE' style={Style} />
    },
    Aside(props:PasStyleProps) {
        const Clear = useClear(props)
        const { Style } = useEvents({...props}, 'ASIDE')

        return <aside {...Clear} data-passtyle='ASIDE' style={Style} />
    },
    Header(props:PasStyleProps) {
        const Clear = useClear(props)
        const { Style } = useEvents({...props}, 'HEADER')

        return <header {...Clear} data-passtyle='HEADER' style={Style} />
    },
    Main(props:PasStyleProps) {
        const Clear = useClear(props)

        const { Style } = useEvents({...props}, 'MAIN')

        return <main {...Clear} data-passtyle='MAIN' style={Style} />
    },
    Footer(props:PasStyleProps) {
        const Clear = useClear(props)

        const { Style } = useEvents({...props}, 'FOOTER')

        return <footer {...Clear} data-passtyle='FOOTER' style={Style} />
    },
    Body(props:PasStyleProps) {
        const Clear = useClear(props)

        const { Style } = useEvents({...props}, 'BODY')

        return <body {...Clear} data-passtyle='BODY' style={Style} />
    },
    Form(props:PasStyleProps<FormAttr>) {
        const Clear = useClear(props)

        const { Style } = useEvents({...props}, 'FORM')

        return <form {...Clear} data-passtyle='FORM' style={Style} />
    },
    Section(props:PasStyleProps) {
        const Clear = useClear(props)

        const { Style } = useEvents({...props}, 'SECTION')

        return <section {...Clear} data-passtyle='SECTION' style={Style} />
    },
    Button(props:PasStyleProps<ButtonAttr>) {
        const Clear = useClear(props)

        const { Style } = useEvents({...props}, 'BUTTON')

        return <button {...Clear} data-passtyle='BUTTON'style={Style} />
    },
    Nav(props:PasStyleProps) {
        const Clear = useClear(props)

        const { Style } = useEvents({...props}, 'NAV')

        return <nav {...Clear} data-passtyle='NAV' style={Style} />
    },
    Span(props:PasStyleProps) {
        const Clear = useClear(props)

        const { Style } = useEvents({...props}, 'SPAN')

        return <span {...Clear} data-passtyle='SPAN' style={Style} />
    },
    H1(props:PasStyleProps) {
        const Clear = useClear(props)

        const { Style } = useEvents({...props}, 'H1')

        return <h1 {...Clear} data-passtyle='H1' style={Style} />
    },
    H2(props:PasStyleProps) {
        const Clear = useClear(props)

        const { Style } = useEvents({...props}, 'H2')

        return <h2 {...Clear} data-passtyle='H2' style={Style} />
    },
    H3(props:PasStyleProps) {
        const Clear = useClear(props)

        const { Style } = useEvents({...props}, 'H3')

        return <h3 {...Clear} data-passtyle='H3' style={Style} />
    },
    H4(props:PasStyleProps) {
        const Clear = useClear(props)

        const { Style } = useEvents({...props}, 'H4')

        return <h4 {...Clear} data-passtyle='H4' style={Style} />
    },
    H5(props:PasStyleProps) {
        const Clear = useClear(props)

        const { Style } = useEvents({...props}, 'H5')

        return <h5 {...Clear} data-passtyle='H5' style={Style} />
    },
    H6(props:PasStyleProps) {
        const Clear = useClear(props)

        const { Style } = useEvents({...props}, 'H6')

        return <h6 {...Clear} data-passtyle='H6' style={Style} />
    },
    P(props:PasStyleProps) {
        const Clear = useClear(props)

        const { Style } = useEvents({...props}, 'P')

        return <p {...Clear} data-passtyle='P' style={Style} />
    },
    Table(props:PasStyleProps<TableAttr>) {
        const Clear = useClear(props)

        const { Style } = useEvents({...props}, 'TABLE')

        return <table {...Clear} data-passtyle='TABLE' style={Style} />
    },
    Thead(props:PasStyleProps) {
        const Clear = useClear(props)

        const { Style } = useEvents({...props}, 'THEAD')

        return <thead {...Clear} data-passtyle='THEAD' style={Style} />
    },
    Tbody(props:PasStyleProps) {
        const Clear = useClear(props)

        const { Style } = useEvents({...props}, 'TBODY')

        return <tbody {...Clear} data-passtyle='TBODY' style={Style} />
    },
    Tfoot(props:PasStyleProps) {
        const Clear = useClear(props)

        const { Style } = useEvents({...props}, 'TFOOT')

        return <tfoot {...Clear} data-passtyle='TFOOT' style={Style} />
    },
    Tr(props:PasStyleProps<TrAttr>) {
        const Clear = useClear(props)

        const { Style } = useEvents({...props}, 'TR')

        return <tr {...Clear} data-passtyle='TR' style={Style} />
    },
    Td(props:PasStyleProps<TdAttr>) {
        const Clear = useClear(props)

        const { Style } = useEvents({...props}, 'TD')

        return <td {...Clear} data-passtyle='TD' style={Style} />
    },
    Th(props:PasStyleProps<ThAttr>) {
        const Clear = useClear(props)

        const { Style } = useEvents({...props}, 'TH')

        return <th {...Clear} data-passtyle='TH' style={Style} />
    },
    Img(props:PasStyleProps<ImgAttr>) {
        const Clear = useClear(props)

        const { Style } = useEvents({...props}, 'IMG')

        return <img {...Clear} data-passtyle='IMG' style={Style} />
    },
    A(props:PasStyleProps<AnchorAttr>) {
        const Clear = useClear(props)

        const { Style } = useEvents({...props}, 'A')

        return <a {...Clear} data-passtyle='A' style={Style} />
    },
    Code(props:PasStyleProps) {
        const Clear = useClear(props)

        const { Style } = useEvents({...props}, 'CODE')

        return <code {...Clear} data-passtyle='CODE' style={Style} />
    },
    Label(props:PasStyleProps<LabelAttr>) {
        const Clear = useClear(props)

        const { Style } = useEvents({...props}, 'LABEL')

        return <label {...Clear} data-passtyle='LABEL' style={Style} />
    },
    Iframe(props:PasStyleProps<IframeAttr>) {
        const Clear = useClear(props)

        const { Style } = useEvents({...props}, 'IFRAME')

        return <iframe {...Clear} data-passtyle='IFRAME' style={Style} />
    },
    TextArea(props:PasStyleProps<TextareaAttr>) {
        const Clear = useClear(props)

        const { Style } = useEvents({...props}, 'TEXTAREA')

        return <textarea {...Clear} data-passtyle='TEXTAREA' style={Style} />
    },
    Dialog(props:PasStyleProps<DialogAttr>){
        const Clear = useClear(props)
        const { Style } = useEvents({...props}, 'DIALOG')

        return <dialog {...Clear} data-passtyle='DIALOG' style={Style} />
    }
}

export default PasStyle