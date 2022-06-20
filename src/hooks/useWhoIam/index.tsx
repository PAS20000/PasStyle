import * as React from 'react'

type TReturn = {
    random:string
}
const useWhoIam = (addString?:string) : TReturn => {
    const [ random, setRandom ] = React.useState<string>()

    React.useEffect(() => {
        if(addString){
            setRandom(`${Math.random()}-${addString}`)
        } else {
            setRandom(Math.random().toString())
        }
    }, [])

    return {
        random:random,
    }
}

export default useWhoIam