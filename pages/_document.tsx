import styled from '@emotion/styled'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

const Body = styled.body`
  padding: 0;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background-color: gray;
`

class Document extends NextDocument {
    render(){
    return (
      <Html lang='pt'>
        <Head />
        <Body>
            <Main />
            <NextScript />
        </Body>
      </Html>
    )
  }
}

export default Document