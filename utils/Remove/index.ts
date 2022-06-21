import { PasStyleProps } from "../../src"

const Remove = {
    children(props : PasStyleProps) {
        return {...{...props, children:null}}
    }
}

export default Remove
