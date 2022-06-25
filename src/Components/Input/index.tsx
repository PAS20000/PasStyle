import * as React from 'react'
import PasStyle, { InputAttr, PasStyleProps } from '../..'
import useId from '../../Hooks/useId'
import Color from './Components/Color'
import Date from './Components/Date'
import Email from './Components/Email'
import Password from './Components/Password'
import Text from './Components/Text'
import Upload, { InputFile } from './Components/Upload'
import useUpload from './Components/Upload/Hooks/useUpload'
import Url from './Components/Url'

export type InputPropsMethod<T = {}> = T & {
    label?:React.ReactNode
} & InputAttr

const Input = {
    Text(props:PasStyleProps<InputPropsMethod>) {
        return <Text {...props} />
    },
    Color(props:PasStyleProps<InputPropsMethod>) {
        return <Color {...props}/>
    },
    Date(props:PasStyleProps<InputPropsMethod>) {
        return <Date {...props}/>
    },
    Passowrd(props:PasStyleProps<InputPropsMethod>) {
        return <Password {...props}/>
    },
    Email(props:PasStyleProps<InputPropsMethod>) {
        return <Email {...props}/>
    },
    Url(props:PasStyleProps<InputPropsMethod>) {
        return <Url {...props} />
    },
    File(props:PasStyleProps<InputPropsMethod & InputFile>) {

        const { label, maxFiles, accept, id, get, maxSize, value, children, Art } = props

        //const arrayChildren = React.Children.toArray(children)

        const { addFile, sendFile, removeFile, files, inputId } = useUpload({
            id:'PasStyle.input.File',
            get,
            maxFiles,
            maxSize,
        })
        const { hash } = useId('Input.File.Div')

        const listener = () => {
            const div = document.getElementById(hash) as HTMLElement
            if(div) {
                const Buttons = Array.from(div.children)
                Buttons.map(button => button.addEventListener('click', sendFile))
            }
        }

        React.useEffect(() => {
            listener()
        }, [hash])

        return(
            <PasStyle.Div id={hash}>
                {children}
                <PasStyle.Input 
                    type='file' 
                    multiple={maxFiles === 1 || !maxFiles ? false : true}
                    w='0px'
                    onChange={(e) => addFile(e)}
                    id={inputId}
                    accept={accept}
                    value={value}
                />
            </PasStyle.Div>
        )
    },
}

export default Input