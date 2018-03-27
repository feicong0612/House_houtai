/**
 * 图书数据更新模块
 */
let Book = require("./booksModel.js");
const updateData = function(obj) {
  let id = obj.id;
  let title = obj.title;
  let type = obj.type;
  let newId = obj.newId;
  let wherestr = {'id': id};
  let updatestr = {
    'id': newId,
    'title': title,
    'type': type,
    'updateTime': new Date()
  };

  Book.update(wherestr, updatestr, function(err, res) {
    if (err) {
      console.log("Error:" + err);
    }
    else {
      console.log("更新数据成功！");
      console.log("Res:" + res);
    }
  })
};

module.exports = updateData;
