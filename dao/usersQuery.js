/*
*搜索功能模块
* */
let User = require('./usersModel.js');

const queryData = (wherestr = null, sort = {'id': 1}, callback) => {
  let condition = wherestr;
  //名称
  if (wherestr.uname) {
    let reg = new RegExp(wherestr.uname, 'i');
    condition.uname = {$regex: reg};
  }
  if (wherestr.uname === '') {
    delete condition.uname;
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
  User.find(wherestr, function(err, res) {
      if (err) {
        console.log("Error:" + err);
      }
      else {
        callback(res);
      }
    }
  ).skip(skipnum).limit(pageSize).sort(sort);

};

module.exports = queryData;
