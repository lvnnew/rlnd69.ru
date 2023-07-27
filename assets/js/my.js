collections.renderer.imageMedia = function (value, metaData, record, rowIndex, colIndex, store) {
  if (value != '' && value != null) {
    var imgPath = MODx.config['collections.renderer_image_path'];
    return '<img src="' + MODx.config.base_url + 'assets/img/' + value + '" width="64">';
  }
};