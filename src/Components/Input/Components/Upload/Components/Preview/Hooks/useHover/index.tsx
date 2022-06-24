import * as React from "react"

const useHover = () => {
    const [ hover , setHover ] = React.useState<boolean>(false)

    const mouseHover = {
        enter(){
            setHover(true)
        },
        leave(){
            setHover(false)
        }
    }

    return {
        mouseHover,
        enter:mouseHover.enter,
        leave:mouseHover.leave,
        hover,
        setHover
    }
}

export default useHover