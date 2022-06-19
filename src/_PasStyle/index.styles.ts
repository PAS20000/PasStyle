import styled from "@emotion/styled";
import CreateStyle, { TCreateStyle } from "./CreateStyle/index.styles";

const StyleDiv = styled.div<TCreateStyle>`
  ${props => CreateStyle({...props})}
`

const StyleCode = styled.code<TCreateStyle>`
  ${props => CreateStyle({...props})}
`

const StyleInput = styled.input<TCreateStyle>`
  ${props => CreateStyle({...props})}
`

const StyleForm = styled.form<TCreateStyle>`
  ${props => CreateStyle({...props})}
`

const StyleArticle = styled.article<TCreateStyle>`
  ${props => CreateStyle({...props})}
`

const StyleSection = styled.section<TCreateStyle>`
  ${props => CreateStyle({...props})}
`

const StyleAside = styled.aside<TCreateStyle>`
  ${props => CreateStyle({...props})}
`

const StyleNav = styled.nav<TCreateStyle>`
  ${props => CreateStyle({...props})}
`

const StyleMenu = styled.menu<TCreateStyle>`
  ${props => CreateStyle({...props})}
`

const StyleHeader = styled.header<TCreateStyle>`
  ${props => CreateStyle({...props})}
`

const StyleMain = styled.main<TCreateStyle>`
  ${props => CreateStyle({...props})}
`

const StyleBody = styled.body<TCreateStyle>`
  ${props => CreateStyle({...props})}
`

const StyleFooter = styled.footer<TCreateStyle>`
  ${props => CreateStyle({...props})}
`

const StyleButton = styled.button<TCreateStyle>`
  ${props => CreateStyle({...props})}
`

const StyleSpan = styled.span<TCreateStyle>`
  ${props => CreateStyle({...props})}
`

const StyleH1 = styled.h1<TCreateStyle>`
  ${props => CreateStyle({...props})}
`

const StyleH2 = styled.h2<TCreateStyle>`
  ${props => CreateStyle({...props})}
`

const StyleH3 = styled.h3<TCreateStyle>`
  ${props => CreateStyle({...props})}
`

const StyleH4 = styled.h4<TCreateStyle>`
  ${props => CreateStyle({...props})}
`

const StyleH5 = styled.h5<TCreateStyle>`
  ${props => CreateStyle({...props})}
`

const StyleH6 = styled.h6<TCreateStyle>`
  ${props => CreateStyle({...props})}
`

const StyleP = styled.p<TCreateStyle>`
  ${props => CreateStyle({...props})}
`

const StyleTable = styled.thead<TCreateStyle>`
  ${props => CreateStyle({...props})}
`

const StyleThead = styled.thead<TCreateStyle>`
  ${props => CreateStyle({...props})}
`

const StyleTbody = styled.tbody<TCreateStyle>`
  ${props => CreateStyle({...props})}
`

const StyleTfoot = styled.tfoot<TCreateStyle>`
  ${props => CreateStyle({...props})}
`

const StyleTr = styled.tr<TCreateStyle>`
  ${props => CreateStyle({...props})}
`

const StyleTd = styled.td<TCreateStyle>`
  ${props => CreateStyle({...props})}
`

const StyleTh = styled.th<TCreateStyle>`
  ${props => CreateStyle({...props})}
`

const StyleImg = styled.img<TCreateStyle>`
  ${props => CreateStyle({...props})}
`

const StyleA = styled.a<TCreateStyle>`
  ${props => CreateStyle({...props})}
`

const StyleTextArea = styled.textarea<TCreateStyle>`
  ${props => CreateStyle({...props})}
`

const StyleLabel = styled.label<TCreateStyle>`
  ${props => CreateStyle({...props})}
`

const StyleIframe = styled.iframe<TCreateStyle>`
  ${props => CreateStyle({...props})}
`

export default  {
    StyleArticle,
    StyleAside,
    StyleBody,
    StyleDiv,
    StyleButton,
    StyleFooter,
    StyleForm,
    StyleHeader,
    StyleMain,
    StyleMenu,
    StyleNav,
    StyleSection,
    StyleSpan,
    StyleH1,
    StyleH2,
    StyleH3,
    StyleH4,
    StyleH5,
    StyleH6,
    StyleP,
    StyleThead,
    StyleTbody,
    StyleTfoot,
    StyleTd,
    StyleTr,
    StyleTh,
    StyleTable,
    StyleA,
    StyleImg,
    StyleInput,
    StyleTextArea,
    StyleCode,
    StyleLabel,
    StyleIframe,
    CreateStyle,
}