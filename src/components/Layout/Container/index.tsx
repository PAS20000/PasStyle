import * as React from 'react'
import PasStyle, { PasStyleProps } from '../../..'

const Container = {
    Div(props:PasStyleProps) {
        return <PasStyle.Div {...props}/>
    },
    Article(props:PasStyleProps) {
        return <PasStyle.Article {...props}/>
    },
    Section(props:PasStyleProps) {
        return <PasStyle.Section {...props}/>
    },
    Span(props:PasStyleProps) {
        return <PasStyle.Span {...props}/>
    },
    Form(props:PasStyleProps) {
        return <PasStyle.Form {...props}/>
    },
    Aside(props:PasStyleProps) {
        return <PasStyle.Aside {...props}/>
    },
    Nav(props:PasStyleProps) {
        return <PasStyle.Nav {...props}/>
    },
}

export default Container