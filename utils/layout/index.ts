export const breakPoints = [1920, 400]

export const Media = (index:number, minOrMax:'min' | 'max') : string => {
    return minOrMax === 'max' ? 
    `@media (max-width: ${breakPoints[index]}px)`
    :
    `@media (min-width: ${breakPoints[index]}px)`
}