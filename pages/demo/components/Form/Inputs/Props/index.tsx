import * as React from 'react'
import Field from '../../../../../../src/components/Field'
import useDemoCTX from '../../../../../../src/hooks/useDemoCTX'


const Props = () => {

    const { style, setStyle } = useDemoCTX()


    return(
        <>
            <Field 
                prop='background:'
                placeholder='bg='
                onChange={(e:any) => setStyle({...style, bg:e.target.value})}
                value={style.bg}
                type='color'
            />
            <Field 
                prop='padding:'
                placeholder='pd='
                onChange={(e:any) => setStyle({...style, pd:e.target.value})}
                value={style.pd}
            />
            <Field 
                prop='color:'
                placeholder='color='
                onChange={(e:any) => setStyle({...style, color:e.target.value})}
                value={style.color}
                type='color'
            />
            <Field 
                prop='border:'
                placeholder='border='
                onChange={(e:any) => setStyle({...style, border:e.target.value})}
                value={style.border}
            />
            <Field 
                prop='border-color:'
                placeholder='b_Color='
                onChange={(e:any) => setStyle({...style, b_Color:e.target.value})}
                value={style.b_Color}
                type='color'
            />
            <Field 
                prop='border-radius:'
                placeholder='b_Radius='
                onChange={(e:any) => setStyle({...style, b_Radius:e.target.value})}
                value={style.b_Radius}
            />
            <Field 
                prop='margin:'
                placeholder='mg='
                onChange={(e:any) => setStyle({...style, mg:e.target.value})}
                value={style.mg}
            />
            <Field 
                prop='box-shadow:'
                placeholder='shadow='
                onChange={(e:any) => setStyle({...style, shadow:e.target.value})}
                value={style.shadow}
            />
            <Field 
                prop='transform:'
                placeholder='transform='
                onChange={(e:any) => setStyle({...style, transform:e.target.value})}
                value={style.transform}
            />
            <Field 
                prop='font-size:'
                placeholder='f_size='
                onChange={(e:any) => setStyle({...style, f_size:e.target.value})}
                value={style.f_size}
            />
            <Field 
                prop='font-weight:'
                placeholder='f_weight='
                onChange={(e:any) => setStyle({...style, f_weight:e.target.value})}
                value={style.f_weight}
                type='number'
            />
            <Field 
                prop='text-transform:'
                placeholder='f_transform='
                onChange={(e:any) => setStyle({...style, t_transform:e.target.value})}
                value={style.t_transform}
            />
        </>
    )
}

export default Props