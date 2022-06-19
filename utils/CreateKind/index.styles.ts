import { PasStyleProps } from "../types"

type Props = {
    kind:string
    Css:Object
}

const CreateKind = ({
    kind,
    Css
} : Props) : PasStyleProps => {
    return {...Css[kind ?? 'default']()}
}

export default CreateKind