import Color from "../../../Color/index.styles"
import { PasStyleProps } from "../../../utils/types"

const Css = {
    default() : PasStyleProps{
        return{
            transform:'translate(90vh, 25vh)',
            position:'fixed',
            bg:Color.bg,
            pd:'20px',
            z:'10'          
        }
    }
}

export default Css