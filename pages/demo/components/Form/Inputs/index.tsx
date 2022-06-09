import * as React from 'react'
import Field from '../../../../../src/components/Field'
import { Styles } from '../../../../../src/components/_PasStyle/types'
import useDemoCTX from '../../../../../src/hooks/useDemoCTX'

type Props = {
    _hover?:boolean
}

const Inputs = ({
    _hover
} : Props) => {

    const { style, setStyle, hover, setHover } = useDemoCTX()

    const changes = (obj : Styles) => {

        if(_hover){
            setHover({...hover, ...obj})
        } else {
            setStyle({...style, ...obj})
        }
    }

    const values = (key : string) => {
        if(_hover){
            return hover[key]
        } else {
            return style[key]
        }
    }


    return(
        <>
            <Field 
                prop='background :'
                placeholder='bg='
                onChange={(e:any) => changes({bg : e.target.value})}
                value={values('bg')}
                type='color'
            />
            <Field 
                prop='padding :'
                placeholder='pd='
                onChange={(e:any) =>  changes({pd : e.target.value})}
                value={values('pd')}
            />
            <Field 
                prop='color :'
                placeholder='color='
                onChange={(e:any) =>  changes({color : e.target.value})}
                value={values('color')}
                type='color'
            />
            <Field 
                prop='border :'
                placeholder='border='
                onChange={(e:any) =>  changes({border : e.target.value})}
                value={values('border')}
            />
            <Field 
                prop='border-color :'
                placeholder='b_Color='
                onChange={(e:any) =>  changes({b_Color : e.target.value})}
                value={values('b_Color')}
                type='color'
            />
            <Field 
                prop='border-radius :'
                placeholder='b_Radius='
                onChange={(e:any) =>  changes({b_Radius : e.target.value})}
                value={values('b_Radius')}
            />
            <Field 
                prop='margin :'
                placeholder='mg='
                onChange={(e:any) =>  changes({mg : e.target.value})}
                value={values('mg')}
            />
            <Field 
                prop='box-shadow :'
                placeholder='shadow='
                onChange={(e:any) =>  changes({shadow : e.target.value})}
                value={values('shadow')}
            />
            <Field 
                prop='transform :'
                placeholder='transform='
                onChange={(e:any) =>  changes({transform : e.target.value})}
                value={values('transform')}
            />
            <Field 
                prop='font-size :'
                placeholder='f_size='
                onChange={(e:any) =>  changes({f_size : e.target.value})}
                value={values('f_size')}
            />
            <Field 
                prop='font-weight :'
                placeholder='f_weight='
                onChange={(e:any) =>  changes({f_weight : e.target.value})}
                value={values('f_weight')}
                type='number'
            />
            <Field 
                prop='text-transform :'
                placeholder='f_transform='
                onChange={(e:any) =>  changes({t_transform : e.target.value})}
                value={values('t_transform')}
            />
        </>
    )
}

export default Inputs