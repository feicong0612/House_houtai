/*
*图书搜索功能模块
* */
let Book = require("./booksModel.js");

const queryData = (wherestr = null, sort = {"id": 1}, callback) => {
  if (wherestr !== null) {
    if (wherestr.title) {
      let reg = new RegExp(wherestr.title, "i");
      wherestr = {'title': {$regex: reg}};
    }
    if (!wherestr.id) {
      if (!wherestr || !wherestr.title) {
        wherestr = null;
      }
    }
  }
  Book.find(wherestr, function(err, res) {
      if (err) {
        console.log("Error:" + err);
      }
      else {
        let resCopy = [];
        for (let obj of res) {
          let item = {
            id: obj.id,
            title: obj.title,
            type: obj.type,
            addTime: obj.addTime.toLocaleString(),
            updateTime: obj.updateTime,
          };
          if (obj.updateTime) {
            item.updateTime = obj.updateTime.toLocaleString();
          }
          else {
            item.updateTime = null;
          }
          resCopy.push(item);
        }
        callback(resCopy);
      }
    }
  ).sort(sort);

};

module.exports = queryData;
