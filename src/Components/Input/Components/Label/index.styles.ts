import { PasStyleProps } from "../../../.."
import useThemeCTX from "../../../../Contexts/ThemeContext/useThemeCTX"


const Css = {
    default() : PasStyleProps {

        const { ChangeColorByTheme } = useThemeCTX()

        return {
            h:'13px',
            position:'absolute',
            bg:ChangeColorByTheme('gray.300', 'gray.600'),
            color:ChangeColorByTheme('green.600', 'green.300'),
            transform:'translateY(-10px)',
            pd:'0px 5px 0px',
            b_radius:'8px',
            f_size:'14px',
            t_transform:'capitalize',
        }
    }
}

export default Css