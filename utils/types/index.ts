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
    name?:AnimationName[number]
    time?:number
    type?:TypeAnimation[number]
}

export type PasProps = {
    children?:React.ReactNode
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
    border?:string
    b_radius?:string
    b_color?:string
    target?:string
    animation?:Animation
    f_size?:string
    f_weight?:string
    f_family?:string
    t_transform?:string
    t_decoration?:string
    t_align?:string
    transform?:string
    transition?:string
    op?:string
    pd_bottom?:string  
    pd_left?:string 
    pd_top?:string 
    pd_right?:string
    mg_bottom?:string  
    mg_left?:string  
    mg_top?:string   
    mg_right?:string  
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
    p_events?:string
    b_bottom?:string
    b_left?:string
    b_right?:string
    b_top?:string
}

export type Styles = {
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
    border?:string
    b_radius?:string
    b_color?:string
    target?:string
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
    color?:string
    cursor?:string
    position?:string
    outline?:string
    outline_color?:string
    z?:string
    unselectableText?:boolean
    display?:string
    p_Events?:string
    b_bottom?:string
    b_left?:string
    b_right?:string
    b_top?:string
}