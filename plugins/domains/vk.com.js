module.exports = {

    re: [
        /^http:\/\/vk\.com\/video\-/i
    ],

    mixins: [
        "og-image",
        "favicon",
        "canonical",
        "og-description",
        "og-video-duration",
        "og-site",
        "og-title"
    ],

    getLink: function(og) {

        if (!og.video.url) return;

        var oid = og.video.url.match(/oid=([\-_a-zA-Z0-9]+)/);
        var vid = og.video.url.match(/vid=([\-_a-zA-Z0-9]+)/);
        var hash = og.video.url.match(/embed\_hash=([\-_a-zA-Z0-9]+)/);

        if (!oid || !vid || !hash) return;

        return {
                href: "//vk.com/video_ext.php?oid=" + oid[1] + "&id=" + vid[1] + "&hash=" + hash[1] ,
                type: CONFIG.T.text_html,
                rel: CONFIG.R.player,
                "aspect-ratio": 4/3
            };
    },

    tests: [
        "http://vk.com/video-28416224_167941015?hash=e9112109e2eaf6a2",
        "http://vk.com/video-14099381_167915765"
    ]
};