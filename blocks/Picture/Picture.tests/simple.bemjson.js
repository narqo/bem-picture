({ block : 'page',
    head : [],
    content : [
        { block : 'Picture',
            url : 'http://placekitten.com/300/300',
            width : 300,
            height : 300,
            alt : 'A picture with pretty kitten' },

        { block : 'Picture',
            url : 'http://placekitten.com/300/300',
            width : 300,
            height : 300,
            alt : 'A picture with pretty kitten',
            sources : [
                { url : 'http://placekitten.com/450/450', density : '1.5x' },
                { url : 'http://placekitten.com/600/600', density : '2x' }
            ]
        },

        // TODO: `sizes` (see https://html.spec.whatwg.org/multipage/embedded-content.html#the-source-element-when-used-with-the-picture-element)
        { block : 'Picture',
            url : 'http://placekitten.com/300/300',
            sizes : {},
            sources : [
                { url : 'kitty_200px.jpg' },
                { url : 'kitty_200px@2x.jpg', density : '2x' },
                { url : 'kitty_200px_1w.jpg', size : '1w' }
            ]
        }
    ].map(function(pic) { return { tag : 'div', content : pic } })
})
