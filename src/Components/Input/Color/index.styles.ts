import { PasStyleProps } from "../../../../utils/types"
import useThemeCTX from "../../../Contexts/ThemeContext/useThemeCTX"

const Css = {
    default() : PasStyleProps {

        const {theme , useChangeColorByTheme} = useThemeCTX()

        return {
            bg:useChangeColorByTheme('gray.300', 'gray.600'), 
            border:'solid 2px', 
            b_color:theme.colors.cyan[300],
            color:theme.colors.yellow[300],
            pd:'5px',
            b_radius:'8px',
            f_size:'14px'
        }
    }
}

export default Css