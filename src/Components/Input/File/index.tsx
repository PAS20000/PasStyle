import * as React from 'react'
import PasStyle from '../../..'
import { PasStyleProps } from '../../../../utils/types'
import useWhoIam from '../../../Hooks/useWhoIam'
import Button from '../../Button'

type Props = {
    label?:string
}

const File = {
    Single(props:PasStyleProps<Props>) {
        const {sequencial} = useWhoIam('PasStyle-Upload')

        const [file, setFile] = React.useState<File>()

        const {onChange, label} = props

        const Action = {
            sendFile() {
                document.getElementById(sequencial).click()
            },
            changeFile(e : any) {
                onChange &&  onChange(e)
                setFile(e.target.files[0])
            }

        }
        return(
            <PasStyle.Div>
                <Button.Default onClick={Action.sendFile}>
                    {label}
                </Button.Default>
                {file &&
                    <PasStyle.Div>
                        <PasStyle.Img src={URL.createObjectURL(file)}
                            w='50px'
                            h='50px'
                        />
                        <PasStyle.Span>
                            {file.name}-{(file.size / 1024).toFixed(2)}Kb
                        </PasStyle.Span>
                    </PasStyle.Div>
                }
                <PasStyle.Input 
                    type='file' 
                    w='0px'
                    onChange={(e) => Action.changeFile(e)}
                    id={sequencial}
                />
            </PasStyle.Div>
        )
    },
    Multiple(props:PasStyleProps<Props>) {
        return(
            <></>
        )
    }
}

export default File