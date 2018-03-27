const express = require('express');
const router = express.Router();
const insertData = require('../dao/bookInsert');
router.get('/', (req, res, next) => {
  // 从请求的 query string 中获取参数
  insertData(req.query);
});

module.exports = router;
