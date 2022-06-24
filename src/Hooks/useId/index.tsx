import * as React from 'react'
import Keys from './Keys'

const useId = (addString?:string) => {

    const createRange = (max : number) => { 
        return Math.floor(Math.random() * max)
    }

    const [ random, setRandom ] = React.useState<string>('')

    const arrayNumbers = random && random.split('-')[0].replace('.', '').split('')

    const create = {
        hash(){
            return random && `${arrayNumbers.map(number => Keys.Alphabet[number]).filter((letter : string, i : number) => letter).toString().replaceAll(',','')}-${addString}`
        }
    }

    React.useEffect(() => {
        setRandom(`${Math.random() * 16}-${addString}`)
    }, [])
    
    return {
        hash:create.hash(),
    }
}

export default useId