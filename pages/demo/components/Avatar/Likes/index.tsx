import * as React from 'react'
import PasStyle from '../../../../../src/components/_PasStyle'

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

    return(
        <PasStyle>
            <PasStyle
                tag='NEXTLINK'
                href={link}
                target='_blank'
            >
                <PasStyle 
                    tag='IMG' 
                    src={thumb}
                    w='75px'
                    h='75px'
                />
            </PasStyle>
            <PasStyle>
                {name}
            </PasStyle>
        </PasStyle>
    )
}

export default Likes