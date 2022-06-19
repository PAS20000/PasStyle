import * as React from 'react'
import useThemeCTX from '../../hooks/useThemeCTX'
import PasStyle from '../../_PasStyle'

const Lorem = () => {

    const { theme } = useThemeCTX()

    const ispum = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
    but also the leap into electronic typesetting, remaining essentially unchanged.
    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`

    return(
       <PasStyle tag='P'>
           {ispum}
            <PasStyle tag='A' href='#' target='_blank'
                color={theme.colors.cyan}
                _hover={{
                    transition: '1s',
                    color: theme.colors.purple,
                }}
            >
                External Link
            </PasStyle>
       </PasStyle>
    )
}

export default Lorem