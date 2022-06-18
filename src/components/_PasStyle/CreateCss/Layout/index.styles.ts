import { Return } from "../Types"

type PropsLayout = {
    display?:string
    flex?:boolean
    between?:boolean
    around?:boolean
    evenly?:boolean
    start?:boolean
    center?:boolean
    end?:boolean
    column?:boolean
    grid?:boolean
    columns?:string
    rows?:string
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
    } : PropsLayout) : Return {
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
            ${grid && center && `align-self: center;` && `align-items: center;` && `justify-self: center`};
            ${flex && 'flex-wrap: wrap'};
            ${grid && columns && `grid-template-columns: ${columns}`};
            ${grid && rows && `grid-template-rows: ${rows}`};
            ${flex && column && 'flex-direction: column'};
            ${flex && 'display: flex'};
            ${grid && 'display: grid'};
            ${flex && 'flex-wrap: wrap'};
            ${!flex && columns && `grid-template-columns: ${columns}`};
        `
    }


export default Layout