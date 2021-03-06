import { PasStyleProps } from "../../.."
import useThemeCTX from "../../../Contexts/ThemeContext/useThemeCTX"

const Css = {
    default() : PasStyleProps {

        const {theme} = useThemeCTX()

        return{
            transform:'translate(50vh, 25vh)',
            position:'fixed',
            bg:theme.colors.gray['600'],
            pd:'20px',
            z:'99999'          
        }
    }
}

export default Css