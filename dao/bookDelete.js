/**
 * 图书数据删除模块
 */
let Book = require("./usersModel.js");
const deleteData = function(obj) {
  let id = obj.id;
  let wherestr = {'id': id};

  Book.remove(wherestr, function(err, res) {
    if (err) {
      console.log("Error:" + err);
    }
    else {
      console.log('删除数据成功！',id);
      console.log("Res:" + res);
    }
  })
};

module.exports = deleteData;
