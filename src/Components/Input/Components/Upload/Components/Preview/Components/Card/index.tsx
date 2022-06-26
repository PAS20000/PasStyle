import * as React from 'react'
import PasStyle from '../../../../../../../..'
import useMethods from '../../../../../../../../Hooks/useMethods'
import useFileSize from '../../../../Hooks/useFileSize'
import useIconQuery from '../../Hooks/useIconQuery'

type Props = {
    file:File
}

const Card = {
    Gallery({
    file
    } : Props) {
        
        const { fileSize } = useFileSize()
        const { POST } = useMethods()

        const Icon = (file : File) => {
            const { response } = useIconQuery(file)

            return response.icon
        }

        const FileMetadata = (file : File) => {
            return `${file.name} ${fileSize(file)}`
        }

        POST.PasStyle('card', 'gallery', 'div')
        POST.PasStyle('gallery','image','img')

        return(
            <PasStyle.Div flex
                mg='10px'
                border='solid 2px' 
                b_radius='8px'
                className='Preview Gallery'
            >
                {Icon(file)}
                <PasStyle.Img
                    src={URL.createObjectURL(file)}
                    alt={FileMetadata(file)}
                    title={FileMetadata(file)}
                    w='100px'
                    h='100px'
                    b_radius='8px'
                    mg='10px'
                    border='solid 2px'
                    b_color={'white'}
                    shadow='2px 2px 10px'
                    animation={{
                        name:'show',
                        time:1,
                        type:'ease-in'
                    }}
                    _hover={{
                        transition: '1s',
                        op:'0.6',
                    }}
                />
            </PasStyle.Div>
        )
    }
}
export default Card