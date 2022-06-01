import * as React from 'react'
import Link from 'next/link'
import { HTMLAttributeAnchorTarget } from 'react'


type TNextLink = {
    children:React.ReactNode
    href:string
    target:HTMLAttributeAnchorTarget
}

const NextLink = ({ 
    children, 
    target, 
    href 
} : TNextLink) => {
    return (
        <>
            <Link href={href} passHref>
                <a target={target}>
                    {children}
                </a>
            </Link>
        </>
    )
}

export default NextLink