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
            pEvents,
            Webkit,
            Layout
        } = CreateCss

    return`
        ${Keyframes()} 
        ${Animations(animation)}
        ${Unselect(unselectableText)}
        ${pEvents(p_Events)}
        ${Webkit(_webkit)}
        ${Layout({
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
        })}
       
        ${outline && `outline: ${outline}`};
        ${outline_color && `outline-color: ${outline_color}`};
        ${t_align && `text-align: ${t_align}`};
        ${z && `z-index: ${z}`};
        ${position && `position: ${position}`};
        ${shadow && `box-shadow: ${shadow}`};
        ${border && `border: ${border}`};
        ${bg && `background-color: ${bg}`};
        ${color && `color: ${color}`};
        ${w && `width:${w}`};
        ${h && `height: ${h}`};
        ${pd && `padding: ${pd}`};
        ${mg && `margin: ${mg}`};
        ${f_size && `font-size: ${f_size}`};
        ${f_family && `font-family: ${f_family}`};
        ${f_weight && `font-weight: ${f_weight}`};
        ${t_transform && `text-transform: ${t_transform}`};
        ${t_decoration && `text-decoration: ${t_decoration}`};
        ${transform && `transform: ${transform}`}; 
        ${transition && `transition: ${transition}`};
        ${op && `opacity: ${op}`};
        ${cursor && ` cursor: ${cursor}`};
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