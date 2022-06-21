import * as React from 'react'

export type AnimationName = [
    'show'
]

export type TypeAnimation = [
    'linear',
    'ease',
    'ease-in',
    'ease-out',
    'ease-in-out'
]

export type Animation = {
    name:AnimationName[number]
    time:number
    type?:TypeAnimation[number]
}

export type PasProps = {
    children?:React.ReactNode
    name?:string
    grid?:boolean
    flex?:boolean
    between?:boolean
    around?:boolean
    evenly?:boolean
    start?:boolean
    center?:boolean
    end?:boolean
    column?:boolean
    columns?:string
    rows?:string
    bg?:string
    pd?:string
    w?:string
    h?:string
    mg?:string
    src?:string
    href?:string
    border?:string
    b_radius?:string
    b_color?:string
    target?:string
    className?:string
    id?:string
    animation?:Animation
    f_size?:string
    f_weight?:string
    f_family?:string
    t_transform?:string
    t_decoration?:string
    t_align?:string
    transform?:string
    transition?:string
    op?:string,
    shadow?:string
    _media?:{
        max?:[number, Styles]
        min?:[number, Styles]
    }
    _hover?:Styles
    _focus?:Styles
    color?:string
    cursor?:string
    position?:string
    outline?:string
    outline_color?:string
    z?:string
    unselectableText?:boolean
    _webkit?:string
    display?:string
    p_Events?:string
    value?:string
    b_bottom?:string
    b_left?:string
    b_right?:string
    b_top?:string
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
    src?:string
    href?:string
    border?:string
    target?:string
    className?:string
    id?:string
    animation?:Animation
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
    b_color?:string
    b_bottom?:string
    b_left?:string
    b_right?:string
    b_top?:string
    b_radius?:string
    cursor?:string
    position?:string
    shadow?:string
    outline?:string
    outline_color?:string
    z?:string
    unselectableText?:boolean
    _webkit?:string
    display?:string
    p_Events?:string
}