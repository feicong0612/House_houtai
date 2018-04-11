let express = require('express');
let router = express.Router();
let queryData = require('../dao/usersQuery');

/* GET home page. */
router.get('/', function(req, res, next) {
  let str;    //存放客户端传来信息数据
  let sort;   //存放客户端传来的显示信息条件
  str = req.query;
  queryData(str, sort, (data) => {
    res.jsonp({user: data});
  });
});

module.exports = router;
