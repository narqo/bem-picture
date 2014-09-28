bem-picture
===========

*Project description goes here...*

See http://www.slideshare.net/yandex/ltpicture-opera-software

## Usage

~~~js
{ block : 'Picture',
    url : 'lamp.jpg',
    width : 100,
    height : 100,
    alt : 'An image of a lamp',
    sources : [
        { url : 'lamp@1.5x.jpg', density : '1.5x' }
        { url : 'lamp@2x.jpg', density : '2x' }
        { url : 'lamp@4x.jpg', density : '4x' }
    ]
}
~~~

### Things not yet implemented

- `media` – A media query of the intended media of the resource.
- `sizes` – Describes the final width of the image.
  - `width` descriptor of the source
- `type` – The MIME-type of the resource.

## Install

First, install the library to your project. [Bower][bower] is a nice chose for
such task:

~~~
› bower install --save bem-picture
~~~

Add `<libs/bem-picture>/blocks` level to the your levels of definition list.

## License

WTFPL

[beminfo]: http://bem.info
[bower]: http://bower.io
