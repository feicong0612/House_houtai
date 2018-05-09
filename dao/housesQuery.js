/*
*搜索功能模块
* */
let House = require('./housesModel.js');

const queryData = (wherestr = {}, sort = {'id': 1}, callback) => {
    //console.log('标题', wherestr.title);
    let condition = wherestr;                 //条件
    //标题
    if (wherestr.title) {
      let reg = new RegExp(wherestr.title, 'i');
      condition.title = {$regex: reg};
    }
    if (wherestr.title === '') {
      delete condition.title;
    }
    //租金
    if (wherestr.rent) {
      condition.rent = {$gte: wherestr.rent[0], $lte: wherestr.rent[1]};
    }
    if (wherestr.rent === 'all') {
      delete condition.rent;
    }
    //位置
    if (wherestr.location) {
      condition.location = wherestr.location;
    }
    if (wherestr.location === 'all') {
      delete condition.location;
    }
    //方式
    if (wherestr.way) {
      condition.way = wherestr.way;
    }
    if (wherestr.way === 'all') {
      delete condition.way;
    }
    //房型
    if (wherestr.type) {
      condition.type = wherestr.type;
    }
    if (wherestr.type === 'all') {
      delete condition.type;
    }
    //类型
    if (wherestr.room) {
      condition.room = wherestr.room;
    }
    if (wherestr.room === 'all') {
      delete condition.room;
    }
    //朝向
    if (wherestr.toward) {
      condition.toward = wherestr.toward;
    }
    if (wherestr.toward === 'all') {
      delete condition.toward;
    }

    let pageSize = 5;                   //一页多少条
    let currentPage = 1;
    //分页查询
    if (wherestr.currentPage) {
      currentPage = wherestr.currentPage;
    }

    let skipnum = (currentPage - 1) * pageSize;   //跳过数

    if (wherestr.pageSize === 'all') {
      pageSize = null;
      delete condition.pageSize;
    }
    console.log('条件', condition);
    console.log('每页数量', pageSize);
    delete condition.currentPage;
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
