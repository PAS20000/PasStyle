import * as React from 'react'

type TReturn = {
    sequencial:string
    random:string
}

let id = 0

const useId = (addString?:string) : TReturn => {
    const [ sequencial, setSequencial ] = React.useState<string | number>(id++)
    const [ random, setRandom ] = React.useState<string>()

    React.useEffect(() => {
        if(addString){
            setSequencial(`${sequencial}-${addString}`)
            setRandom(`${Math.random()}-${addString}`)
        } else {
            setRandom(Math.random().toString())
        }
    }, [])

    return {
        sequencial:sequencial.toString(),
        random:random,
    }
}

export default useId