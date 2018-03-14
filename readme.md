# img-extract
> extract multiple images from a single source image

## usage
[![npm badge]][npm package]

### `extract(image, rects) -> images`
Generates a list of `images`, each mirroring the the appearance of `image` when cropped down to the corresponding region.

* `image`: The `HTMLImageElement` source image
* `rects`: A list of rectangles of the format `{ size: [ w, h ], position: [ x, y ] }`
* `images`: The resulting list of `HTMLCanvasElement` instances

[npm package]: https://www.npmjs.com/package/img-extract
[npm badge]:   https://nodei.co/npm/img-extract.png?mini

