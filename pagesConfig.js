const pages ={
    JBZD: {
        name: "JBZD",
        logo: "https://vignette.wikia.nocookie.net/logopedia/images/e/ef/Jbzd-logo1.jpg/revision/latest/scale-to-width-down/340?cb=20151205160123",
        uri: 'https://jbzd.com.pl',
        separator: '/str/',
        query: {
            container: 'div.article-content',
            description: 'alt',
            img: '.article-image a img', // TODO a img, video source 
            imgAttribute: 'src',

        },
        imagesPrefix: '',
    },
    KWEJK: {
        name: "KWEJK",
        logo: "https://kwejk.pl/images/logo.png",
        uri: 'https://kwejk.pl',
        separator: '/strona/',
        query: {
            container: 'div.media-element',
            description: 'alt',
            img: '.figure img',
            imgAttribute: 'src',
        },
        pageNumberQuery: 'div.pagination ul li.current a',
        imagesPrefix: '',
    },
    MISTRZOWIE: {
        name: "MISTRZOWIE",
        logo: "https://mistrzowie.org/res/services/mistrzowie/img/layout/logo_smallheader.gif",
        uri: 'https://mistrzowie.org',
        separator: '/page/',
        query: {
            container: '.box.fav.picture',
            description: 'alt',
            img: 'img.pic',
            imgAttribute: 'src',
        },
        imagesPrefix: 'https://mistrzowie.org',
    }
} 
module.exports = pages;