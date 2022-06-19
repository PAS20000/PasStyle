import Color from "../../../Color/index.styles"
import { PasStyleProps } from "../../../types"


const Css = {
    default() : PasStyleProps {
        return {
            h:'13px',
            position:'absolute',
            bg:Color.bg,
            color:Color.green,
            transform:'translateY(-10px)',
            pd:'0px 5px 0px',
            b_radius:'8px',
            f_size:'14px',
            t_transform:'capitalize',
        }
    }
}

export default Css