import * as React from 'react'
import PasStyle from '../..'
import { PasStyleProps } from '../../types'
import Button from '../Button'
import Css from './index.styles'

type css = [
    'default'
]

type Props = {
   css?:css[number]
}

const Popup = (props:PasStyleProps<Props>) => {
    
    const {children, onClick} = props

    const [open, setOpen] = React.useState<boolean>(false)

    const action = {
        open(){
            setOpen(true)
        },
        close(){
            setOpen(false)
        }
    }

    const createCss = (css : css[number]) : PasStyleProps => {
        return {...Css[css ?? 'default']()}
    }

    return(
    <>
        {!open && 
            <Button onClick={action['open']}>
                Open
            </Button>
        }
        {open &&
            <>
                <PasStyle
                    {...createCss(props.css)}
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