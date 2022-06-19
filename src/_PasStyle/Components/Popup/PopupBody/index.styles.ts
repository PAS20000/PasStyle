import useThemeCTX from "../../../Contexts/ThemeContext/useThemeCTX"
import { PasStyleProps } from "../../../utils/types"

const Css = {
    default() : PasStyleProps{

        const {theme} = useThemeCTX()

        return{
            transform:'translate(90vh, 25vh)',
            position:'fixed',
            bg:theme.colors.bg,
            pd:'20px',
            z:'10'          
        }
    }
}

export default Css