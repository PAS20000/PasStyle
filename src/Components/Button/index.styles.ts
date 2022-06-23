
import { PasStyleProps } from "../.."
import useThemeCTX from "../../Contexts/ThemeContext/useThemeCTX"

const Css = {
    default() : PasStyleProps {

        const { ChangeColorByTheme, theme } = useThemeCTX()

        return{
            pd:'10px',
            bg:ChangeColorByTheme('green.600','green.300'),
            border: 'none',
            mg:'10px',
            b_radius:'8px',
            color:ChangeColorByTheme('black','white'),
            cursor: 'pointer',
            _hover:{
                transition: '1s',
                bg:theme.colors.gray[400]
            }
        }
    },
    circle() : PasStyleProps {

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
    },
    gallery() : PasStyleProps {

        const { ChangeColorByTheme, theme } = useThemeCTX()

        return{
            bg:ChangeColorByTheme('green.600','green.300'),
            border: 'dotted 1px',
            mg:'10px',
            pd:'50px',
            b_radius:'8px',
            color:ChangeColorByTheme('black','white'),
            cursor: 'pointer',
            _hover:{
                transition: '1s',
                bg:theme.colors.gray[400]
            }
        }
    }
}

export default Css

