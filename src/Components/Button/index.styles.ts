import { PasStyleProps } from "../../../utils/types"
import useThemeCTX from "../../Contexts/ThemeContext/useThemeCTX"

const Css = {
    default() : PasStyleProps {

        const { useChangeColorByTheme, theme } = useThemeCTX()

        return{
            pd:'10px',
            bg:useChangeColorByTheme('green.600','green.300'),
            border: 'none',
            mg:'10px',
            b_radius:'8px',
            color:useChangeColorByTheme('black','white'),
            cursor: 'pointer',
            _hover:{
                transition: '1s',
                bg:theme.colors.gray[400]
            }
        }
    },
    select() : PasStyleProps {

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
                bg:theme.colors.gray[400]
            }
        }
    }
}

export default Css

