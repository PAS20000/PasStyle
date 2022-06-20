import useThemeCTX from "../../../Contexts/ThemeContext/useThemeCTX"
import { PasStyleProps } from "../../../utils/types"

const Css = {
    default() : PasStyleProps {

        const { theme } = useThemeCTX()

        return {
            pd:'10px',
            w:'90%',
            b_radius:'8px',
            border:'solid 2px',
            bg:theme.colors.bg,
            color:theme.colors.yellow,
            b_color:theme.colors.cyan,
            outline_color:theme.colors.yellow,
        }
    }
}

export default Css