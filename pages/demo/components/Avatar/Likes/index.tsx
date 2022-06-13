import * as React from 'react'
import PasStyle from '../../../../../src/components/_PasStyle'
import useDemoCTX from '../../../../../src/hooks/useDemoCTX'

type Props = {
    thumb:string
    name:string
    link:string
}

const Likes = ({
    link,
    name,
    thumb
} : Props) => {

    const {style, hover} = useDemoCTX()

    return(
        <>
            <PasStyle flex
                tag='NEXTLINK'
                href={link}
                target='_blank'
                {...style}
                t_align='center'
                _hover={{
                    ...hover
                }}
            >
                <PasStyle
                    tag='IMG' 
                    src={thumb}
                    b_Radius='8px'
                    w='80px'
                    h='80px'
                />
               <PasStyle tag='SPAN' mg='25px 10px 0px'>
                    {name}
               </PasStyle>
            </PasStyle>  
        </>
    )
}

export default Likes