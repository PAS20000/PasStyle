import * as React from 'react'
import { Styles } from '../../../../../src/_PasStyle/utils/types'
import useDemoCTX from '../../../../../src/hooks/useDemoCTX'
import Input from '../../../../../src/_PasStyle/Components/Input'

type Props = {
    _hover?:boolean
    create?:boolean
    props?:boolean
}

const Inputs = ({
    _hover,
    create,
    props
} : Props) => {

    const { style, setStyle, hover, setHover } = useDemoCTX()

    const changes = (obj : Styles) => {

        if(_hover){
            setHover({...hover, ...obj})
        }
        if(create){
           
        } 
        if(props){
            setStyle({...style, ...obj})
        }
    }

    const values = (key : string) => {
        if(_hover){
            return hover[key]
        }
        if(create){
          
        } 
        if(props){
            return style[key]
        }
    }

    return(
        <>
            <Input 
                label='background :'
                placeholder='bg='
                onChange={(e:any) => changes({bg : e.target.value})}
                value={values('bg')}
                type='color'
            />                                                                                                        
            <Input 
                label='padding :'
                placeholder='pd='
                onChange={(e:any) =>  changes({pd : e.target.value})}
                value={values('pd')}
            />
            <Input 
                label='color :'
                placeholder='color='
                onChange={(e:any) =>  changes({color : e.target.value})}
                value={values('color')}
                type='color'
            />
            <Input 
                label='border :'
                placeholder='border='
                onChange={(e:any) =>  changes({border : e.target.value})}
                value={values('border')}
            />
            <Input 
                label='border-color :'
                placeholder='b_Color='
                onChange={(e:any) =>  changes({b_color : e.target.value})}
                value={values('b_Color')}
                type='color'
            />
            <Input 
                label='border-radius :'
                placeholder='b_Radius='
                onChange={(e:any) =>  changes({b_radius : e.target.value})}
                value={values('b_Radius')}
            />
            <Input 
                label='margin :'
                placeholder='mg='
                onChange={(e:any) =>  changes({mg : e.target.value})}
                value={values('mg')}
            />
            <Input 
                label='box-shadow :'
                placeholder='shadow='
                onChange={(e:any) =>  changes({shadow : e.target.value})}
                value={values('shadow')}
            />
            <Input 
                label='transform :'
                placeholder='transform='
                onChange={(e:any) =>  changes({transform : e.target.value})}
                value={values('transform')}
            />
            <Input 
                label='font-size :'
                placeholder='f_size='
                onChange={(e:any) =>  changes({f_size : e.target.value})}
                value={values('f_size')}
            />
        </>
    )
}

export default Inputs