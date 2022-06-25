import * as React from 'react'
import PasStyle, { PasStyleProps } from '../..'
import useGeneration from '../../Hooks/useGeneration'
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

        const { POST } = useGeneration()

        const { children, Art } = props

        return(
            <PasStyle.Button  {...POST.Art({Css, Art})} {...props} className={POST.class({ father:'button', kid:'generic' })} />
        )
    },
    Upload(props:PasStyleProps<Props>){

        const { POST } = useGeneration()

        const { children, Art } = props

        return(
            <PasStyle.Button {...POST.Art({Css, Art})} {...props} className={POST.class({ father:'button', kid:'upload' })} />
        )
    },
}

export default Button