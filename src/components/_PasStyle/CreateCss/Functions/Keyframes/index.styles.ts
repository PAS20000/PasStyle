import { Return } from "../../Types"

type createAnimation = {
    name:string
    from:string
    to:string
}


const Keyframes = function() : Return {
        const createKeyframe = ({
            name,
            from,
            to
        } : createAnimation) : string => {
            return`
                @keyframes ${name} {
                    from {
                        ${from}
                    }
                
                    to {
                        ${to}
                    }
                }
            `
        }
    
        return createKeyframe({
            name:'show',
            from:'opacity: 0;',
            to:'opacity: 1;'
        })
    }

export default Keyframes