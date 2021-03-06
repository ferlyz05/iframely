var re = /http:\/\/www\.collegehumor\.com\/(picture|post)\/([0-9]+)\.*/i;

module.exports = {

    re: re,

    mixins: [
        "og-title",
        "og-description",
        "og-site",
        "canonical",
        "date",
        "keywords",

        "favicon",
        "og-image-rel-image"
    ],

    tests: [{
        pageWithFeed: "http://www.collegehumor.com/pictures",
        getUrl: function(url) {
            if (url.match(re)) {
                console.log(url);
                return url;
            }
        }
    },
        "http://www.collegehumor.com/picture/6785079/cops-pull-over-black-man",
        {
            skipMixins: [
                "og-description"
            ]
        }
    ]
};