/**
 * 数据插入模块
 */
let House = require('./housesModel');
const deleteData = function(obj) {
  let wherestr = {title: obj.title};

  House.remove(wherestr, function(err, res) {
    if (err) {
      console.log('Error:' + err);
    }
    else {
      console.log('Res:' + res);
    }
  });
};

module.exports = deleteData;
