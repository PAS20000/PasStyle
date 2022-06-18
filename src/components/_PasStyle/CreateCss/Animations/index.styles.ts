import { Animation } from "../../types"
import { Return } from "../Types"


const Animations =  function (animation : Animation) : Return {
        if(animation){
            return`
                animation: ${animation.name} ${animation.time}s;
                animation-timing-function: ${animation.type ?? 'ease'};
            `
        }
    }

export default Animations