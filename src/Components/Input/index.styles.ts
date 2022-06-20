import { PasStyleProps } from "../../../utils/types"
import useThemeCTX from "../../Contexts/ThemeContext/useThemeCTX"

const Css = {
    default() : PasStyleProps {

        const { ChangeColorByTheme } = useThemeCTX()

        return {
            pd:'10px',
            b_radius:'8px',
            border:'solid 2px',
            bg:ChangeColorByTheme('gray.300', 'gray.600'),
            color:ChangeColorByTheme('yellow.600', 'yellow.300'),
            b_color:ChangeColorByTheme('cyan.600', 'cyan.300'),
            outline_color:ChangeColorByTheme('yellow.600', 'yellow.300'),
        }
    }
}

export default Css