var express= require('express');
var routers= express.Router();

routers.get('/', function(req, res, next) {
    res.send('Congratulations!!! If you\'re seeing this then we have our react and express connected...');
  });

module.exports= routers;