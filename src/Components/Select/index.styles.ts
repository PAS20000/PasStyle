import Color from "../../Color/index.styles"
import { PasStyleProps } from "../../utils/types"

const Css = {
    default() : PasStyleProps {
        return {
            bg:Color.bg, 
            border:'solid 2px', 
            b_color:Color.cyan,
            color:Color.yellow,
            pd:'5px',
            w:'95%',
            b_radius:'8px',
            f_size:'14px'
        }
    }
}

export default Css