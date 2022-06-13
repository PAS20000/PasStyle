import * as React from 'react'
import useThemeCTX from '../../../../src/hooks/useThemeCTX'
import PasStyle from '../../../../src/components/_PasStyle'
import useDemoCTX from '../../../../src/hooks/useDemoCTX'
import { Users } from '../../../api/users'
import Likes from './Likes'
import Card from './Card'

type Props = {
   
}

const Avatar = ({
    name,
    avatar,
    createdAt,
    likes,
    document,
    email,
    id,
    phone,
    status,
} : Users & Props) => {

    const { theme } = useThemeCTX()
    const { style, hover } = useDemoCTX()
    const [show, setShow] = React.useState<boolean>(false)

    const Date = () => {
        const date = createdAt.split('T')[0].split('-')
        const eua = `${date[1]}/${date[2]}/${date[0]}`
        const br = `${date[1]}/${date[2]}/${date[0]}`

        return{
            br,
            eua,
        }
    }

    return(
        <PasStyle>
            <PasStyle flex center
                onClick={() => setShow(show ? false : true)}
                href={avatar} 
                {...style}
                _hover={{
                    ...hover
                }}
            > 
                <PasStyle 
                    tag='IMG'
                    src={avatar}
                    w='50px'
                    h='50px'
                    mg='10px'
                    b_Radius='50%'
                />
                <PasStyle 
                    tag='H2'
                >
                    {name}
                </PasStyle>
            </PasStyle>
           {show &&  
                <PasStyle>
                    <Card 
                        title='Email'
                    >
                        {email}
                    </Card>
                    <Card title={document.type}>
                        {document.number}
                    </Card>
                    <Card title='Phone'>
                        {phone.ddi} {phone.ddd} {phone.number}
                    </Card>
                    <Card title='Status'>
                        {status}
                    </Card>
                    <Card title='Date'>
                        {Date().eua}
                    </Card>
                    <PasStyle>
                        Likes
                        {likes.map(like => 
                            <Likes key={like.id}
                                thumb={like.thumb}
                                name={like.name}
                                link={like.link}
                            />
                        )}
                    </PasStyle>
                </PasStyle>
            }
    </PasStyle>
    )   
}

export default Avatar