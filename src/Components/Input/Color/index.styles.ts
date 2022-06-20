import useThemeCTX from "../../../Contexts/ThemeContext/useThemeCTX"
import { PasStyleProps } from "../../../utils/types"

const Css = {
    default() : PasStyleProps {

        const {theme} = useThemeCTX()

        return {
            bg:theme.colors.bg, 
            border:'solid 2px', 
            b_color:theme.colors.cyan,
            color:theme.colors.yellow,
            pd:'5px',
            w:'95%',
            b_radius:'8px',
            f_size:'14px'
        }
    }
}

export default Css