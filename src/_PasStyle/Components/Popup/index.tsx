import * as React from 'react'
import PasStyle from '../..'
import { SetState } from '../../../contexts/types'
import { PasStyleProps } from '../../utils/types'
import Button from '../Button'
import Css from './index.styles'

type css = [
    'default'
]

type Props = {
   css?:css[number]
   state:[boolean, SetState<boolean>]
}

const Popup = (props:PasStyleProps<Props>) => {
    
    const {children, css, state} = props

    const action = {
        open(){
            state[1](true)
        },
        close(){
            state[1](false)
        }
    }

    const createCss = (css : css[number]) : PasStyleProps => {
        return {...Css[css ?? 'default']()}
    }

    return(
    <>
        {state[0] &&
            <>
                <PasStyle
                    {...createCss(css)}
                    onClick={action.close}
                    {...{...props, children:null}}
                />
                {children}
            </>
        }
    </>
    )
}

export default Popup