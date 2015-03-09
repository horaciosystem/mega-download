module.exports = function(app) {
  var express = require('express');
  var fileRouter = express.Router();

  fileRouter.get('/', function(req, res) {
    res.sendFile('/home/horacio/Downloads/opendbcopy-0.51rc2-install.jar');
  });

  app.use('/api/file', fileRouter);
};
