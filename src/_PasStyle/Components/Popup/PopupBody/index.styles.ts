import { PasStyleProps } from "../../../types"

const Css = {
    default() : PasStyleProps{
        return{
            transform:'translate(50vh, 10vh)',
            position:'fixed',
            bg:'white',
            pd:'20px',
            z:'10'          
        }
    }
}

export default Css