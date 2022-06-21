import * as React from 'react'
import Color from './Color'
import Date from './Date'
import Email from './Email'
import Password from './Password'
import Text from './Text'
import Url from './Url'
import Upload, { InputFile } from './Upload'
import { InputAttr, PasStyleProps } from '../..'

export type InputPropsMethod<T = {}> = T & {
    label?:string
} & InputAttr

const Input = {
    Text(props:PasStyleProps<InputPropsMethod>) {

        return <Text {...props}/>
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
    File(props:PasStyleProps<InputPropsMethod<InputFile>>) {
        return <Upload {...props}/>
    },
}
   



export default Input