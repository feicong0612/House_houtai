/*
*搜索功能模块
* */
let House = require("./housesModel.js");

const queryData = (wherestr = {}, sort = {"id": 1}, callback) => {
    //console.log('标题', wherestr.title);
    let condition = wherestr;                 //条件
    if (wherestr.title) {
      let reg = new RegExp(wherestr.title, "i");
      condition.title = {$regex: reg};
    }
    if (wherestr.title === '') {
      condition.title = null;
    }
    if (wherestr.rent) {
      condition.rent = {$gte: wherestr.rent[0], $lte: wherestr.rent[1]};
    }
    //分页查询
    let pageSize = 5;                   //一页多少条
    let currentPage = 1;                //当前第几页

    let skipnum = (currentPage - 1) * pageSize;   //跳过数

    if (wherestr.currentPage) {
      condition.currentPage = wherestr.currentPage;
    }
    if (wherestr.pageSize === 'all') {
      pageSize = null;
      delete condition.pageSize;
    }
    console.log('条件', condition);
    console.log('每页数量', pageSize);
    House.find(condition, function(err, res) {
        if (err) {
          console.log("Error:" + err);
        }
        else {
          console.log('结果', res);
          callback(res);
        }
      }
    ).skip(skipnum).limit(pageSize).sort(sort);

  }
;

module.exports = queryData;
