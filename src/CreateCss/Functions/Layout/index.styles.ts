import { Return } from "../../Types"

type Props = {
    display:string
    flex:boolean
    between:boolean
    around:boolean
    evenly:boolean
    start:boolean
    center:boolean
    end:boolean
    column:boolean
    grid:boolean
    columns:string
    rows:string
    z:string
    position:string
    w:string
    h:string
    pd:string
    mg:string
    transform:string
    bg:string
}

const Layout = function({
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
        w,
        h,
        pd,
        mg,
        transform,
        bg
    } : Props) : Return {
        return `
            ${display && `display: ${display}`};
            ${flex && 'display: flex'};
            ${flex && between && `justify-content: space-between`};
            ${flex && around && `justify-content: space-around`};
            ${flex && evenly && `justify-content: space-evenly`};
            ${flex && start && `justify-content: start`};
            ${flex && center && `justify-content: center`};
            ${flex && end && `justify-content: end`};
            ${grid && 'display: grid'};
            ${center && `align-items: center`};
            ${end && `align-items: flex-end`};
            ${start && `align-items: flex-start`};
            ${grid && center && `align-self: center;` && `justify-self: center`};
            ${flex && 'flex-wrap: wrap'};
            ${grid && columns && `grid-template-columns: ${columns}`};
            ${grid && rows && `grid-template-rows: ${rows}`};
            ${flex && column && 'flex-direction: column'};
            ${flex && 'display: flex'};
            ${grid && 'display: grid'};
            ${flex && 'flex-wrap: wrap'};
            ${!flex && columns && `grid-template-columns: ${columns}`};
            ${z && `z-index: ${z}`};
            ${position && `position: ${position}`};
            ${w && `width:${w}`};
            ${h && `height: ${h}`};
            ${pd && `padding: ${pd}`};
            ${mg && `margin: ${mg}`};
            ${transform && `transform: ${transform}`};
            ${bg && `background-color: ${bg}`};
        `
    }

export default Layout