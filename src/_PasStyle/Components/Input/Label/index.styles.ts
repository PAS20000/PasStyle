import useThemeCTX from "../../../Contexts/ThemeContext/useThemeCTX"
import { PasStyleProps } from "../../../utils/types"


const Css = {
    default() : PasStyleProps {

        const { theme } = useThemeCTX()

        return {
            h:'13px',
            position:'absolute',
            bg:theme.colors.bg,
            color:theme.colors.green,
            transform:'translateY(-10px)',
            pd:'0px 5px 0px',
            b_radius:'8px',
            f_size:'14px',
            t_transform:'capitalize',
        }
    }
}

export default Css