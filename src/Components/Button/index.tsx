import * as React from 'react'
import PasStyle, { PasStyleProps } from '../..'
import useMethods from '../../Hooks/useMethods'
import Css from './index.styles'

type ArtButton = [
    'add',
    'circle'
][number]
type Props = {
   Art?:ArtButton
}

const Button = {
    Generic(props:PasStyleProps<Props>){

        const { POST, GET } = useMethods()
        const { children, Art } = props

        POST.PasStyle('button','generic', 'button')

        return(
            <PasStyle.Button {...POST.Art({Css, Art})} {...props} />
        )
    },
    Upload(props:PasStyleProps<Props>){

        const { POST, GET } = useMethods()
        const { children, Art } = props

        POST.PasStyle('button','upload', 'button')

        return(
            <PasStyle.Button {...POST.Art({Css, Art})} {...props} />
        )
    },
}

export default Button