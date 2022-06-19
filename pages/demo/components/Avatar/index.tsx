import * as React from 'react'
import PasStyle from '../../../../src/_PasStyle'
import useDemoCTX from '../../../../src/hooks/useDemoCTX'
import { Users } from '../../../api/users'
import Card from './Card'
import Icons from '../../../../src/_PasStyle/Components/Icons'
import { useRouter } from 'next/router'
import useThemeCTX from '../../../../src/_PasStyle/Contexts/ThemeContext/useThemeCTX'

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
    const router = useRouter()
    
    const tratamentDate = () => {
        const pt = router.pathname.split('/').includes('pt')
        return new Date(createdAt.split('T')[0]).toLocaleDateString(pt ? 'pt-BR':'en-US')
    }

    return(
        <PasStyle className='avatar'>
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
                    b_radius='50%'
                />
                <PasStyle 
                    tag='H2'
                >
                    {name}
                </PasStyle>
            </PasStyle>
           {show &&  
                <PasStyle
                   {...style}
                   cursor='normal'
                   mg={`-10px ${style.mg} ${style.mg}`}
                >
                <PasStyle flex evenly>
                    <Card 
                        title='Email'
                        icon={<Icons.Md.MdEmail />}
                    >
                        {email}
                    </Card>
                    <Card 
                        title={document.type}
                        icon={<Icons.Fa.FaFileAlt />}
                    >
                        {document.number}
                    </Card>
                    <Card 
                        title='Phone'
                        icon={<Icons.Md.MdPhone />}
                    >
                        {phone.ddi} {phone.ddd} {phone.number}
                    </Card>
                    <Card 
                        title='Status'
                        icon={<Icons.Md.MdWifiTethering />}                    
                    >
                        {status}
                    </Card>
                    <Card 
                        title='Date'
                        icon={<Icons.Md.MdCalendarToday />}
                    >
                        {tratamentDate()}
                    </Card>
                </PasStyle>
                    Likes
                    <PasStyle grid columns='1fr 1fr'
                       
                    >
                       
                    </PasStyle>
                </PasStyle>
            }
    </PasStyle>
    )   
}

export default Avatar