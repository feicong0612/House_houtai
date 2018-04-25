const express = require('express');
const router = express.Router();
const insertData = require('../dao/usersInsert');
router.get('/', (req, res, next) => {
  // 从请求的 query string 中获取参数
  console.log('接受参数',req.query);
  insertData(req.query);
  res.jsonp(req.query);
});

module.exports = router;
