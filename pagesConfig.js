const pages ={
    JBZD: {
        name: "jbzd",
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
        name: "kwejk",
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
        name: "mistrzowie",
        uri: 'https://mistrzowie.org',
        separator: '/page/',
        content: {
            query: 'pictureImage img',
            attribute: 'src',
        },
        imagesPrefix: 'https://mistrzowie.org',
    }
} 
module.exports = pages;