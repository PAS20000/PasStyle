import { Return } from "../../Types"

type Props = {
    f_size:string
    f_family:string
    f_weight:string
    t_align:string
    color:string
    t_transform:string
    t_decoration:string
}

const Fonts =  function ({
    f_size,
    f_family,
    f_weight,
    t_align,
    color,
    t_transform,
    t_decoration
}: Props) : Return {
        return`
            ${f_size && `font-size: ${f_size}`};
            ${f_family && `font-family: ${f_family}`};
            ${f_weight && `font-weight: ${f_weight}`};
            ${t_align && `text-align: ${t_align}`};
            ${color && `color: ${color}`};
            ${t_transform && `text-transform: ${t_transform}`};
            ${t_decoration && `text-decoration: ${t_decoration}`};
        `
    }

export default Fonts