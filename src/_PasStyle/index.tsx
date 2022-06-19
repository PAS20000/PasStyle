import * as React from 'react'
import Emotion from './index.styles'
import NextImage from '../Contracts/NextImage'
import NextLink from '../Contracts/NextLink'
import { PasStyleProps } from './utils/types'

const PasStyle = (props:PasStyleProps) => {
    const [genStyle, setGenStyle] = React.useState<'emotion' | 'css-in-js'>('emotion')

    const { tag } = props

    if(!tag || tag === 'DIV'){
        return <Emotion.StyleDiv {...props} />
    }
    if(tag === 'INPUT'){
        return <Emotion.StyleInput {...props} />
    }
    if(tag === 'ARTICLE'){
        return <Emotion.StyleArticle {...props} />
    }
    if(tag === 'ASIDE'){
        return <Emotion.StyleAside {...props} />
    } 
    if(tag === 'HEADER'){
        return <Emotion.StyleHeader {...props} />
    }
    if(tag === 'BODY'){
        return <Emotion.StyleBody {...props} />
    }
    if(tag === 'FORM'){
        return <Emotion.StyleForm {...props} />
    }
    if(tag === 'NAV'){
        return <Emotion.StyleNav {...props} />
    }
    if(tag === 'FOOTER'){
        return <Emotion.StyleFooter {...props} />
    }
    if(tag === 'BUTTON'){
        return <Emotion.StyleButton {...props} />
    }
    if(tag === 'MAIN'){
        return <Emotion.StyleMain {...props} />
    }
    if(tag === 'SECTION'){
        return <Emotion.StyleSection {...props} />
    }
    if(tag === 'SPAN'){
        return <Emotion.StyleSpan {...props} />
    }
    if(tag === 'H1'){
        return <Emotion.StyleH1 {...props} />
    }
    if(tag === 'H2'){
        return <Emotion.StyleH2 {...props} />
    }
    if(tag === 'H3'){
        return <Emotion.StyleH3 {...props} />
    }
    if(tag === 'H4'){
        return <Emotion.StyleH4 {...props} />
    }
    if(tag === 'H5'){
        return <Emotion.StyleH5 {...props} />
    }
    if(tag === 'H6'){
        return <Emotion.StyleH6 {...props} />
    }
    if(tag === 'P'){
        return <Emotion.StyleP {...props} />
    }
    if(tag === 'TABLE'){
        return <Emotion.StyleTable {...props} />
    }
    if(tag === 'THEAD'){
        return <Emotion.StyleThead {...props} />
    }
    if(tag === 'TBODY'){
        return <Emotion.StyleTbody {...props} />
    }   
    if(tag === 'TFOOT'){
        return <Emotion.StyleTfoot {...props} />
    }
    if(tag === 'TR'){
        return <Emotion.StyleTr {...props} />
    }
    if(tag === 'TD'){
        return <Emotion.StyleTd {...props} />
    }
    if(tag === 'TH'){
        return <Emotion.StyleTh {...props} />
    }
    if(tag === 'IMG'){
        return <Emotion.StyleImg {...props} />
    }
    if(tag === 'A'){
        return <Emotion.StyleA {...props} />
    }
    if(tag === 'CODE'){
        return <Emotion.StyleCode {...props} />
    }
    if(tag === 'LABEL'){
        return <Emotion.StyleLabel {...props} />
    }
    if(tag === 'IFRAME'){
        return <Emotion.StyleIframe {...props} />
    }
    if(tag === 'NEXTLINK'){
        return (
            <Emotion.StyleDiv {...props} >
                <NextLink href={props.href} target={props.target}>
                    {props.children}
                </NextLink>
            </Emotion.StyleDiv>
        )
    }
    if(tag === 'NEXTIMG'){
        return (
            <Emotion.StyleDiv {...props}>
                <NextImage
                    alt={props.alt}
                    src={props.src}
                    height={props.h}
                    width={props.w}
                />
            </Emotion.StyleDiv>
        )
    }
}

export default PasStyle