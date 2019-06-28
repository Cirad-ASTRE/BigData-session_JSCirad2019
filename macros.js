// Scale images
// Usage: ![:scale 50%](path/to/img.png)
remark.macros.scale = function (percentage) {
  var url = this;
  return '<img src="' + url + '" style="width: ' + percentage + '" />';
};