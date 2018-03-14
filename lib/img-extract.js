module.exports = function extract(image, rects) {
  var count = rects.length
  var images = new Array(count)
  for (var i = 0; i < count; i++) {
    var rect = rects[i]
    var width = rect.size[0]
    var height = rect.size[1]
    var x = rect.position[0]
    var y = rect.position[1]
    var canvas = document.createElement("canvas")
    var context = canvas.getContext("2d")
    canvas.width = width
    canvas.height = height
    context.drawImage(image, -x, -y)
    images[i] = canvas
  }
  return images
}
