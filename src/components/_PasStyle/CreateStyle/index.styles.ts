import styled from "@emotion/styled"
import { Props } from ".."
import { Styles } from "../types"

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
    b_Radius,
    animation,
    f_size,
    f_weight,
    f_family,
    t_transform,
    t_decoration,
    transform,
    transition,
    op,
    color,
    b_Color,
    cursor,
    position,
    shadow,
    outline,
    outline_color
} : Styles) => {
    return`

        ${animation && `@keyframes show {
            from{
                opacity: 0;
            }
            to{
                opacity: 1;
            }
        }
            animation: ${animation} 1s;
        `}
        ${outline && `outline: ${outline}`};
        ${outline_color && `outline-color: ${outline_color}`};
        ${flex && 'display: flex'};
        ${flex && between && `justify-content: space-between`};
        ${flex && around && `justify-content: space-around`};
        ${flex && evenly && `justify-content: space-evenly`};
        ${flex && start && `justify-content: start`};
        ${flex && center && `justify-content: center`};
        ${flex && end && `justify-content: end`};
        ${grid && 'display: grid'};
        ${grid && center && `align-self: center;` && `align-items: center;` && `justify-self: center`};
        ${flex && 'flex-wrap: wrap'};
        ${!flex && columns && `grid-template-columns: ${columns}`};
        ${!flex && rows && `grid-template-rows: ${rows}`};
        ${flex && column ? 'flex-direction: column' : 'flex-direction: row'};
        ${position && `position: ${position}`};
        ${shadow && `box-shadow: ${shadow}`};
        ${border && `border: ${border}`};
        ${b_Radius && `border-radius: ${b_Radius}`};
        ${b_Color && `border-color: ${b_Color}`};
        ${flex && 'display: flex'};
        ${grid && 'display: grid'};
        ${flex && 'flex-wrap: wrap'};
        ${!flex && columns && `grid-template-columns: ${columns}`};
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
            ${_media && `:hover{
                
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
        ${_media && `:hover{
            
        }`}
    `}
`}

export default CreateStyle

export const Testes = styled.div`
        width: 100%;
        background-color: blue;
        outline-color: red;
        @media(max-width: 500px){
            
        }
        font-size: 20px;
        outline: none;
    :focus{
        color: red;
    }
   
   
`