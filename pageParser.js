const rq = require("request-promise");
var parser = require('node-html-parser').parse;

class PageParser {
    async getPageNumber(options) {
        const { uri, pageNumberQuery} = options;
        const res = await rq({uri});
        return parser(res).querySelector(pageNumberQuery).text;
    }
    async  getContent( pageNumber, options) {
        if ( options.uri == 'https://kwejk.pl') {
            const kwNumber = await this.getPageNumber(options)
            pageNumber =  kwNumber - pageNumber;
        }
        const uri = options.uri + options.separator + pageNumber;
        const res = await rq({uri});
        return parser(res).querySelectorAll(options.content.query)
        .map( x => ({ img: options.imagesPrefix + x.attributes[options.content.attribute], page: options.name}));
    }
    async  getContentOfPages( pageNumber, pages) {
        let res = [];
        for (let page of Object.keys(pages)) {
            res = [...res, ...await this.getContent(pageNumber, pages[page])];
        }
        return { pages: Object.keys(pages) ,content: this.shuffle(res) };
    }
    shuffle(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
}
module.exports = PageParser;