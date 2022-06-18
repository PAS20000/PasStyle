import { Return } from "./Types"
import Layout from './Layout/index.styles'
import Unselect from './Unselect/index.styles'
import Webkit from './Webkit/index.styles'
import Animations from './Animations/index.styles'
import Keyframes from './Keyframes/index.styles'


const CreateCss = {
    Layout,
    Unselect,
    Webkit,
    Animations,
    Keyframes,
    pEvents(p_Events : string) : Return {
        if(p_Events){
            return `pointer-events: ${p_Events}`
        }
    },
}

export default CreateCss