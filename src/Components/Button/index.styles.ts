import useThemeCTX from "../../Contexts/ThemeContext/useThemeCTX"
import { PasStyleProps } from "../../utils/types"

const Css = {
    default() : PasStyleProps {

        const { theme } = useThemeCTX()

        return {
            bg:'transparent',
            color: theme.colors.white,
            border: 'none',
            pd:'5px',
            b_radius:'8px',
            cursor: 'pointer',
            _hover:{
                transition: '1s',
                bg:theme.colors.darkGray
            }
        }
    }
}

export default Css

