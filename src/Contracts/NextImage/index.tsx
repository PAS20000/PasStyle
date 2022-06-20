import * as React from 'react'
import Image from 'next/image'


export type TNextImage = {
    src:string
    width?:string | number
    height?:string | number
    alt:string
    className?:string
    layout?:'fixed' | 'fill' | 'intrinsic' | 'responsive'
}

const NextImage = ({ 
    src, 
    width, 
    height, 
    alt, 
    className, 
    layout 
} : TNextImage) => {

    return (
        <>
            <Image 
                src={src} 
                width={width} 
                height={height} 
                alt={alt} 
                className={className} 
                layout={layout} 
            />
        </>
    )
}

export default NextImage