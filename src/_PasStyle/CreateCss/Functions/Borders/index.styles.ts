import { Return } from "../../Types"

type borders = {
    b_bottom:string
    b_left:string
    b_right:string
    b_top:string
    b_color:string
    b_radius:string
    border:string
    shadow:string
    outline:string
    outline_color:string
}

const Borders = function({
    b_bottom,
    b_left,
    b_right,
    b_top,
    b_color,
    b_radius,
    border,
    shadow,
    outline,
    outline_color
} : borders) : Return {

    return`
        ${border && `border: ${border}`};
        ${b_radius && `border-radius: ${b_radius}`};
        ${b_color && `border-color: ${b_color}`};
        ${b_bottom && ` border-bottom: ${b_bottom}`};
        ${b_top && `border-radius: ${b_top}`};
        ${b_right && `border-color: ${b_right}`};
        ${b_left && ` border-bottom: ${b_left}`};
        ${shadow && `box-shadow: ${shadow}`};
        ${outline && `outline: ${outline}`};
        ${outline_color && `outline-color: ${outline_color}`};
    `
}

export default Borders