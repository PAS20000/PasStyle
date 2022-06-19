import { Return } from "../../Types"


type Props = {
    p_Events:string
    cursor:string
}

const Events = function({
    p_Events,
    cursor
}: Props) : Return {

    return`
        ${p_Events && `pointer-events: ${p_Events}`};
        ${cursor && ` cursor: ${cursor}`};
    `
}

export default Events