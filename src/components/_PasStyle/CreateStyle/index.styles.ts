import styled from "@emotion/styled"
import CreateCss from "../CreateCss/index.styles"
import { Props, Styles } from "../types"

export type TCreateStyle = Props

const CreateStyles = ({
    flex,
    between,
    around,
    evenly,
    start,
    end,
    center,
    column,
    columns,
    bg,
    rows,
    pd,
    w,
    h,
    mg,
    grid,
    border,
    b_left,
    b_right,
    b_top,
    b_radius,
    animation,
    f_size,
    f_weight,
    f_family,
    t_transform,
    t_decoration,
    t_align,
    transform,
    transition,
    op,
    color,
    b_color,
    cursor,
    position,
    shadow,
    outline,
    outline_color,
    z,
    b_bottom,
    unselectableText,
    _webkit,
    display,
    p_Events
} : Styles) => {

    const { 
            Unselect, 
            Keyframes, 
            Animations,
            Events,
            Webkit,
            Layout,
            Borders,
            Fonts
        } = CreateCss

    const propsLayout = {
        display,
        flex,
        between,
        around,
        evenly,
        start,
        center,
        end,
        column,
        grid,
        columns,
        rows,
        z,
        position,
        transform,
        w,
        h,
        pd,
        mg,
        bg
    }
    
    const propsBorder = {
        b_bottom,
        b_color,
        b_left,
        b_radius,
        b_right,
        b_top,
        border,
        shadow
    }

    const propsFonts = {
        f_size,
        f_family,
        f_weight,
        t_align,
        color,
        t_transform,
        t_decoration
    }

    const propsEvent = {
        p_Events,
        cursor
    }

    return`
        ${Keyframes()} 
        ${Animations(animation)}
        ${Unselect(unselectableText)}
        ${Events(propsEvent)}
        ${Webkit(_webkit)}
        ${Layout(propsLayout)}
        ${Borders(propsBorder)}
        ${Fonts(propsFonts)}
        ${outline && `outline: ${outline}`};
        ${outline_color && `outline-color: ${outline_color}`};
        ${transition && `transition: ${transition}`};
        ${op && `opacity: ${op}`};
`}

const CreateStyle = (props: TCreateStyle) : string =>  {
    
    const { tag, _hover, _focus, _media } = props

    return`

    ${tag === 'NEXTLINK' && `a{

            ${CreateStyles({...props})}
           
            ${_hover && `:hover{
                ${CreateStyles({..._hover})}
            }`}
            ${_focus && `:focus{
                ${CreateStyles({..._focus})}
            }`}
            ${_media && _media.max && `:@media (max-width: ${_media.max[0]}px){
                ${CreateStyles({..._media.max[1]})}
            }`}
        }`
    }

    ${tag !== 'NEXTIMG' && tag !== 'NEXTLINK' && `
        ${CreateStyles({...props})}
    
        ${_hover && `:hover{
            ${CreateStyles({..._hover})}
        }`}
        ${_focus && `:focus{
            ${CreateStyles({..._focus})}
        }`}
        ${_media && _media.max && `:@media (max-width: ${_media.max[0]}px){
            ${CreateStyles({..._media.max[1]})}
        }`}
    `}
`}

export default CreateStyle

export const Testes = styled.div`
      animation-timing-function: linear;
`