import * as React from 'react'
import PasStyle from '../../..'
import { PasStyleProps } from '../../../types'

const Header = (props : PasStyleProps) => {

    return <PasStyle tag={props.tag ?? 'HEADER'} {...props}/>
}

export default Header