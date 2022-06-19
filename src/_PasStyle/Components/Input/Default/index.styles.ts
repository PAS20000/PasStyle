import Color from "../../../Color/index.styles"
import { PasStyleProps } from "../../../types"

const Css = {
    default() : PasStyleProps {
        return {
            pd:'10px',
            w:'90%',
            b_radius:'8px',
            border:'solid 2px',
            bg:Color.bg,
            color:Color.yellow,
            b_color:Color.cyan,
            outline_color:Color.yellow,
        }
    }
}

export default Css