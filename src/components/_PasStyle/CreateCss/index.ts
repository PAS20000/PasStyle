import { Animation } from "../types"

type Return = string | void

const CreateCss = {
    keyframes() : string {
        return`
            @keyframes show {
                from {
                    opacity: 0;
                }
            
                to {
                    opacity: 1;
                }
            }
        `
    },
    layout({
        grid,
        flex,
        display
    }) : Return {

    },
    animations(animation : Animation) : Return {
        if(animation){
            return`
                animation: ${animation.name} ${animation.time}s;
                animation-timing-function: ${animation.type ?? 'ease'};
            `
        }
    },
    unselect(unselectableText : boolean) : Return {
        if(unselectableText){
            return`
                -webkit-touch-callout: none;
                -webkit-user-select: none;   
                -khtml-user-select: none;
                -moz-user-select: none; 
                -ms-user-select: none;
                user-select: none;
            `
        }
    },
    pEvents(p_Events : string) : Return {
        if(p_Events){
            return `pointer-events: ${p_Events}`
        }
    }
}

export default CreateCss