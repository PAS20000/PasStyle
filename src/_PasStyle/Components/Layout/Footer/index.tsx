import * as React from 'react'
import PasStyle from '../../..'
import { PasStyleProps } from '../../../types'

const Footer = (props : PasStyleProps) => {

    return <PasStyle tag={props.tag ?? 'FOOTER'} {...props}/>
}

export default Footer