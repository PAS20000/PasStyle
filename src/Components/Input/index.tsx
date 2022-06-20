import * as React from 'react'
import { PasStyleProps } from '../../../utils/types'
import Color from './Color'
import Date from './Date'
import Email from './Email'
import File from './File'
import Label from './Label'
import Password from './Password'
import Text from './Text'
import Url from './Url'

type Props = {
    label?:string
}

type PropsFile = {
    multiple?:boolean
}

const Input = {
    Text(props:PasStyleProps<Props>) {

        const { label } = props

        return(
            <Text {...props}>
                <Label htmlFor={label} {...props}>
                    {label}
                </Label>
            </Text>
        )
    },
    Color(props:PasStyleProps<Props>) {

        const { label } = props

        return (
            <Color {...props}>
                <Label htmlFor={label} {...props}>
                    {label}
                </Label>
            </Color>
        )
    },
    Date(props:PasStyleProps<Props>) {

        const { label } = props

        return (
            <Date {...props}>
                <Label htmlFor={label} {...props}>
                    {label}
                </Label>
            </Date>
        )
    },
    Passowrd(props:PasStyleProps<Props>) {

        const { label } = props

        return (
            <Password {...props}>
                <Label htmlFor={label} {...props}>
                    {label}
                </Label>
            </Password>
        )
    },
    Email(props:PasStyleProps<Props>) {

        const { label } = props

        return (
            <Email {...props}>
                <Label htmlFor={label} {...props}>
                    {label}
                </Label>
            </Email>
        )
    },
    Url(props:PasStyleProps<Props>) {

        const { label } = props

        return (
            <Url {...props}>
                <Label htmlFor={label} {...props}>
                    {label}
                </Label>
            </Url>
        )
    },
    File(props:PasStyleProps<Props & PropsFile>) {

         const { multiple } = props 

        return (
            <>
                {multiple ? 
                    <File.Multiple {...props}/> 
                    : 
                    <File.Single {...props}/>
                }
            </>
        )
    },
}
   



export default Input