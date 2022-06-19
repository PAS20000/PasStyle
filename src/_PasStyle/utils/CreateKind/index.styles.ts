import { PasStyleProps } from "../types"



const CreateKind = ({
    kind,
    Css
}) : PasStyleProps => {
    return {...Css[kind ?? 'default']()}
}

export default CreateKind