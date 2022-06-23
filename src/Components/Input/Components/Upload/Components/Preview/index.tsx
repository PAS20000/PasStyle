import * as React from 'react'
import PasStyle from '../../../../../..'
import useThemeCTX from '../../../../../../Contexts/ThemeContext/useThemeCTX'
import Icons from '../../../../../Icons'
import FileControls from './Components/FileControls'
import useIconQuery from './Hooks/useIconQuery'

type Props = {
    file:File
    key:React.Key
    removeFile:(index : React.Key) => void
}

const Preview = {
    default({
        file,
        key,
        removeFile
    }: Props) {

        const { response } = useIconQuery(file)

        return(
            <PasStyle.Div key={key} pd='10px' flex>
                <PasStyle.Span>
                    <Icons.Fi.FiPaperclip />
                    {response.icon} 
                </PasStyle.Span>
                <FileControls 
                    file={file}
                    index={key} 
                    removeFile={removeFile}
                />
            </PasStyle.Div>
        )
    },
    gallery({
        file,
        key,
        removeFile
    } : Props ) {

        return( 
            <PasStyle.Div flex
                key={key} 
                mg='10px'
                border='solid 2px' 
                b_radius='8px'
            >
                <PasStyle.Img src={URL.createObjectURL(file)}
                    w='100px'
                    h='100px'
                    b_radius='8px'
                    mg='10px'
                    border='solid 2px'
                    b_color={'white'}
                    shadow='2px 2px 10px'
                />
                <FileControls 
                    file={file}
                    index={key} 
                    removeFile={removeFile}
                />
            </PasStyle.Div>
        )
    }
    
}

export default Preview