module.exports = {

    re: [
        /^https?:\/\/[\w\.]*instagram\.com\/p\/([a-zA-Z0-9\-]+)/i,
        /^http:\/\/instagr\.am\/p\/([a-zA-Z0-9\-]+)/i,
        /^http:\/\/instagram\.com\/p\/([a-zA-Z0-9\-]+)$/i
    ],

    mixins: [
        "canonical",
        "og-description",
        "og-site",

        "favicon"
    ],

    getMeta: function($selector) {
        return {
            title: $selector('.media-caption .caption-text').html().trim()
        };
    },

    getLinks: function(urlMatch) {
        var src = 'http://instagram.com/p/' + urlMatch[1] +'/media/?size='
        return [{
            href: src + 't',
            type: CONFIG.T.image,
            rel: CONFIG.R.thumbnail,
            width: 150,
            height: 150
        }, {
            href: src + 'm',
            type: CONFIG.T.image,
            rel: CONFIG.R.thumbnail,
            width: 306,
            height: 306
        }, {
            href: src + 'l',
            type: CONFIG.T.image,
            rel: CONFIG.R.image,
            width: 612,
            height: 612
        }];
    },

    tests: [{
        page: "http://blog.instagram.com/",
        selector: ".photogrid a"
    },
        "http://instagram.com/p/HbBy-ExIyF/"
    ]
};