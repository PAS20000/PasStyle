import { PasStyleProps } from "../../../../utils/types"
import useThemeCTX from "../../../Contexts/ThemeContext/useThemeCTX"

const Css = {
    default() : PasStyleProps {

        const {theme} = useThemeCTX()

        return {
            bg:theme.colors.bg, 
            border:'solid 2px', 
            b_color:theme.colors.cyan,
            color:theme.colors.yellow,
            pd:'5px',
            b_radius:'8px',
            f_size:'14px'
        }
    }
}

export default Css