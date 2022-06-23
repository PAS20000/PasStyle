const useFileSize = () => {

    const typeSize = {
        kb(FileSize : number){
            const convert = FileSize / 1000
    
            return {
                string:`${convert.toFixed(2)}KB`,
                isKB:convert < 1000,
                size:convert
            }
        },
        mb(FileSize : number){
            const convert = FileSize / 1000 / 1000
    
            return {
                string:`${convert.toFixed(2)}MB`,
                isMB:convert < 1000,
                size:convert
            }
        },
        gb(FileSize : number){
            const convert = FileSize / 1000 / 1000 / 1000
    
            return {
                string:`${convert.toFixed(2)}GB`,
                isGB:convert < 1000,
                size:convert
            }
        }
    }
    
    const fileSize = (file : File) => {
    
        const { size } = file
    
        if(typeSize.kb(size).isKB){
            return typeSize.kb(size).string
        }
        if(typeSize.mb(size).isMB){
            return typeSize.mb(size).string
        }
        if(typeSize.gb(size).isGB){
            return typeSize.gb(size).string
        }
    }

    return {
        typeSize,
        fileSize
    }
}

export default useFileSize

