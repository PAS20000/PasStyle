import * as React from 'react'
import PasStyle from '../../..'
import { PasStyleProps } from '../../../utils/types'

const Main = (props : PasStyleProps) => {

    return <PasStyle tag={props.tag ?? 'MAIN'} {...props}/>
}

export default Main