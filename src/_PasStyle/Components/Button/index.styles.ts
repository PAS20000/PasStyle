import Color from "../../Color/index.styles"
import { PasStyleProps } from "../../utils/types"

const Css = {
    default() : PasStyleProps {
        return {
            bg:'transparent',
            color: Color.white,
            border: 'none',
            pd:'5px',
            b_radius:'8px',
            cursor: 'pointer',
            _hover:{
                transition: '1s',
                bg:Color.darkGray
            }
        }
    }
}

export default Css

