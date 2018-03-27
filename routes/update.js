let express = require('express');
let router = express.Router();
let updateData = require('../dao/bookUpdate');

router.get('/', (req, res, next) => {
  // 从请求的 query string 中获取参数
  updateData(req.query);
  //console.log('jsonp');
  //res.jsonp(req.query);
});

module.exports = router;
