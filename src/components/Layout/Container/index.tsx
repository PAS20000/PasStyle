import * as React from 'react'
import * as ReactDOM from 'react-dom'
import PasStyle, { PasStyleProps } from '../../..'
import Create from '../../Create'

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
    Body(props:PasStyleProps) {

        return (
            <Create.Render>
                <PasStyle.Body {...props}/>
            </Create.Render>
        )
    },
}

export default Container