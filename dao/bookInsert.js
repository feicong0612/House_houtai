/**
 * 图书数据插入模块
 */
let Book = require("./booksModel.js");
const insertData = function(obj) {
  let id = obj.id;
  let bookName = obj.title;
  let type = obj.type;

  let book = new Book({
    id: id,                    //ISBN编码
    title: bookName,            //书名
    type: type,                 //类型
    addTime: new Date(),       //添加时间
    updateTime: ''             //修改时间
  });
  book.save(function(err, res) {

    if (err) {
      console.log("Error:" + err);
    }
    else {
      console.log('插入数据成功！');
      console.log("Res:" + res);
    }
  });
};

module.exports = insertData;
