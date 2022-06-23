import * as React from 'react'

const letters = [
     'a',
     'b',
     'c',
     'd',
     'e',
     'f',
     'g',
     'h',
     'i',
]

const useId = (addString?:string) => {
    const [ random, setRandom ] = React.useState<string>('')

    const arrayNumbers = random && random.split('-')[0].replace('.', '').split('')

    const create = {
        hash(){
            return random && `${arrayNumbers.map(number => letters[number]).filter((letter) => letter).toString().replaceAll(',','')}-${addString}`
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