module.exports = function(bh) {
    bh.match('Picture__source', function(ctx, json) {
        var srcset = json.url;

        json.density && (srcset += ' ' + json.density);

        ctx
            .tag('source')
            .attrs({
                srcset : srcset,
                type : ctx.type
            });
    });
};
