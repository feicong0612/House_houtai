/*
*图书搜索功能模块
* */
let User = require("./usersModel.js");

const queryData = (wherestr = null, sort = {"id": 1}, callback) => {

  User.find(wherestr, function(err, res) {
      if (err) {
        console.log("Error:" + err);
      }
      else {
        callback(res);
      }
    }
  ).sort(sort);

};

module.exports = queryData;
