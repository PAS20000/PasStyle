import * as React from 'react'

export type DefaultProps = {
    children?:React.ReactNode
    id?:string
    name?:string
    className?:string
    alt?:string
    onClick?:React.MouseEventHandler
    onChange?:React.FormEventHandler
    onSumibt?:React.FormEventHandler
    onMouseLeave?:React.FormEventHandler
    onMouseEnter?:React.FormEventHandler
}

export type Styles = {
    grid?:boolean
    flex?:boolean
    between?:boolean
    end?:boolean
    around?:boolean
    evenly?:boolean
    start?:boolean
    center?:boolean
    column?:boolean
    columns?:string
    rows?:string
    bg?:string
    pd?:string
    w?:string
    h?:string
    mg?:string
    tag?:Tags[number]
    src?:string
    href?:string
    border?:string
    b_Radius?:string
    target?:string
    className?:string
    id?:string
    animation?:Animations[number]
    f_size?:string
    f_weight?:string
    f_family?:string
    t_transform?:string
    t_decoration?:string
    t_align?:string
    transform?:string
    transition?:string
    op?:string,
    color?:string
    b_Color?:string
    cursor?:string
    position?:string
    shadow?:string
    outline?:string
    outline_color?:string
    z?:string
    b_Bottom?:string
}

export type childrenProps<T> = React.PropsWithChildren<T & DefaultProps>

export type PasStyleProps = Styles

export type Tags = [
    'ARTICLE', 
    'SECTION', 
    'ASIDE',
    'HEADER',
    'BODY',
    'DIV',
    'FORM',
    'NAV',
    'FOOTER',
    'BUTTON',
    'MAIN',
    'SPAN',
    'H1',
    'H2',
    'H3',
    'H4',
    'H5',
    'H6',
    'INPUT',
    'P',
    'TD',
    'TR',
    'TH',
    'THEAD',
    'TBODY',
    'TFOOT',
    'TABLE',
    'A',
    'IMG',
    'NEXTLINK',
    'NEXTIMG',
    'CODE',
    'LABEL',
    'IFRAME'
]

export type Animations = [
    'show'
]