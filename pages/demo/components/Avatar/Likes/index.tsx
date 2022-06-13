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
                _hover={{
                    ...hover
                }}
            >
                <PasStyle
                    tag='IMG' 
                    src={thumb}
                    w='75px'
                    h='75px'
                    b_Radius='8px'
                    mg='20px'
                />
               <PasStyle tag='SPAN' mg='45px 0px 0px'>
                    {name}
               </PasStyle>
            </PasStyle>  
        </>
    )
}

export default Likes