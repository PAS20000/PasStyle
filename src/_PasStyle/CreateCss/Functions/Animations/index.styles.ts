import { Animation } from "../../../utils/types"
import { Return } from "../../Types"

type Props = {
    animation:Animation
    transition:string
    op:string
}


const Animations =  function ({
    animation,
    transition,
    op
} : Props) : Return {
        return`
            ${animation && `animation: ${animation.name} ${animation.time}s`};
            ${animation && `animation-timing-function: ${animation.type ?? 'ease'}`};
            ${transition && `transition: ${transition}`};
            ${op && `opacity: ${op}`};
        `
    }

export default Animations