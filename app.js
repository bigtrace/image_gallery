var express = require('express');
var app = express();

var Gallery = require('express-photo-gallery');

var options = {
  title: 'My Awesome Photo Gallery'
};

app.use('/photos', Gallery('D:/image_gallery/photos', options));

app.listen(3000);