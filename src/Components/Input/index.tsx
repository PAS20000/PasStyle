import * as React from 'react'
import Color from './Color'
import Date from './Date'
import Email from './Email'
import Label from './Label'
import Password from './Password'
import Text from './Text'
import Url from './Url'
import Upload, { InputFile } from './Upload'
import { PasStyleProps } from '../..'

type Props = {
    label?:string
}

const Input = {
    Text(props:PasStyleProps<Props>) {

        return <Text {...props}/>
    },
    Color(props:PasStyleProps<Props>) {

        return <Color {...props}/>
    },
    Date(props:PasStyleProps<Props>) {

        return <Date {...props}/>
    },
    Passowrd(props:PasStyleProps<Props>) {

        return <Password {...props}/>
    },
    Email(props:PasStyleProps<Props>) {

        return <Email {...props}/>
    },
    Url(props:PasStyleProps<Props>) {
        return <Url {...props} />
    },
    File(props:PasStyleProps<Props & InputFile>) {
        return <Upload {...props}/>
    },
}
   



export default Input