import * as React from 'react'
import PasStyle, { InputAttr, PasStyleProps } from '../..'
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

        const { addFile, sendFile, removeFile, inputId } = useUpload({
            id:'PasStyle.input.File',
            get,
            maxFiles,
            maxSize,
        })

        const Create = {
            id(string : string){
                return `${inputId}.${string}`
            },
            class(string : string){
                return string
            }
        }

        const divId = Create.id('Div')

        const listener = () => {
            const ButtonUpload = document.querySelector('.PasStyle.Upload.Div > button')
            ButtonUpload.addEventListener('click', sendFile)
        }

        React.useEffect(() => {
            listener()
        }, [inputId])

        return(
            <PasStyle.Div className='PasStyle Upload Div'>
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