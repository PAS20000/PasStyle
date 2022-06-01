module.exports = {
    images: {
        domains: [
           'picsum.photos', 
           'i.pinimg.com', 
           '33.media.tumblr.com', 
           'encrypted-tbn0.gstatic.com',
           'i1.sndcdn.com'
        ]
    },
    trailingSlash: true,
    async headers(){
        return [{
            source:'/:path*',
            headers:[{
                key:'X-Frame-Options',
                value:'SAMEORIGIN',
            },{
                key:'x-robots-tag',
                value:'*',
            }]
        }]
    }
}