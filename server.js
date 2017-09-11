'use strict';

let http = require('http');
let url = require('url');
let express = require('express');
let moment = require('moment');

let router = express();
  
router.configure(function(){
  router.use(function(req, res, next) {
    res.setHeader("myname", "Nick");
    return next();
  });
});

router.use('/time', function (req, res) {
  const formattedDate = moment().format('DD-MM-YY HH:mm:ss');
  res.end(formattedDate);
});

router.use('/author', function (req, res) {
  res.end('Nikolay Sergeychuk');
});

router.use('/length', function (req, res) {
  let parsedUrl = url.parse(req.url);
  let len = parsedUrl.query ? parsedUrl.query.length  : 0;
  res.end(`${len}`);
});



let server = http.createServer(router);

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  let addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});

module.exports = server;
