# img-extract
> extract a subimage from a source image

## usage
[![npm badge]][npm package]

### `extract(image, x, y, width, height) -> canvas`
Extracts a `canvas` from the provided `image` and `x`, `y`, `width`, `height` region.

* `image`: The source image of type [`CanvasImageSource`](CanvasImageSource)
* `x`: The x-coordinate offset of the subimage in pixels
* `y`: The y-coordinate offset of the subimage in pixels
* `width`: The width of the subimage in pixels
* `height`: The height of the subimage in pixels
* `canvas`: The subimage, of type `HTMLCanvasElement`

[npm package]: https://www.npmjs.com/package/img-extract
[npm badge]:   https://nodei.co/npm/img-extract.png?mini
[CanvasImageSource]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasImageSource
