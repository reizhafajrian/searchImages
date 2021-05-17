var express = require('express');
const controller = require('../controller/controller');
const { upload } = require('../middleware/multer');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/searchimage',upload,controller.postImage)

module.exports = router;
