module.exports = function(bh) {
    bh.match('Picture', function(ctx, json) {
        var res = [];

        json.sources &&
            (res = json.sources.map(function(src) {
                return {
                    elem : 'source',
                    url : src.url,
                    density : src.density
                };
            }));

        json.url &&
            res.push({
                block : 'image',
                mix : { block : 'Picture', elem : 'image' },
                url : json.url,
                width : json.width,
                height : json.height,
                alt : json.alt
            });

        ctx
            .tag('picture')
            .content(res);
    });
};
