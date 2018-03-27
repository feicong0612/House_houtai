let express = require('express');
let router = express.Router();
let queryData = require('../dao/bookQuery');

/* GET home page. */
router.get('/', function(req, res, next) {
  let str;    //存放客户端传来的图书信息数据
  let sort;   //存放客户端传来的显示信息条件
  if (req.query.addTime) {
    sort = req.query;
  }
  else {
    str = req.query;
  }
  queryData(str, sort, (data) => {
    res.jsonp({book: data});
  });
});

module.exports = router;
