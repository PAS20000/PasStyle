import * as React from 'react'
import { InputAttr, PasStyleProps } from '../..'
import Color from './Components/Color'
import Date from './Components/Date'
import Email from './Components/Email'
import Password from './Components/Password'
import Text from './Components/Text'
import Upload, { InputFile } from './Components/Upload'
import Url from './Components/Url'

export type InputPropsMethod<T = {}> = T & {
    label?:string
} & InputAttr

const Input = {
    Text(props:PasStyleProps<InputPropsMethod>) {
        return <Text {...props} />
    },
    Color(props:PasStyleProps<InputPropsMethod>) {
        return <Color {...props}/>
    },
    Date(props:PasStyleProps<InputPropsMethod>) {
        return <Date {...props}/>
    },
    Passowrd(props:PasStyleProps<InputPropsMethod>) {
        return <Password {...props}/>
    },
    Email(props:PasStyleProps<InputPropsMethod>) {
        return <Email {...props}/>
    },
    Url(props:PasStyleProps<InputPropsMethod>) {
        return <Url {...props} />
    },
    File(props:PasStyleProps<InputPropsMethod & InputFile>) {
        return <Upload {...props} />
    },
}

export default Input