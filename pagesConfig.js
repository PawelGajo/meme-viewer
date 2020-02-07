const pages ={
    JBZD: {
        name: "JBZD",
        uri: 'https://jbzd.com.pl',
        separator: '/str/',
        content: {
            query: 'div.article-image a img, div.article-image video source',
            attribute: 'src',
        },
        pageNumberQuery: '.paginator > table > tbody > tr > td > span > strong',
        imagesPrefix: '',
    },
    KWEJK: {
        name: "KWEJK",
        uri: 'https://kwejk.pl',
        separator: '/strona/',
        content: {
            query: 'div.media-element',
            attribute: 'data-image',
        },
        pageNumberQuery: 'div.pagination ul li.current a',
        imagesPrefix: '',
    },
    MISTRZOWIE: {
        name: "MISTRZOWIE",
        uri: 'https://mistrzowie.org',
        separator: '/page/',
        content: {
            query: 'img.pic',
            attribute: 'src',
        },
        imagesPrefix: 'https://mistrzowie.org',
    }
} 
module.exports = pages;