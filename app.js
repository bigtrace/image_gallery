var express = require('express');
var app = express();

var Gallery = require('express-photo-gallery');

var options = {
  title: 'My Awesome Photo Gallery'
};

app.use('/', Gallery('./photos', options));

app.listen(3000);
