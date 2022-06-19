import { Return } from "../../Types"

const Unselect =  function(unselectableText : boolean) : Return {
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
}

export default Unselect