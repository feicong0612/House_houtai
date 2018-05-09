/**
 * 数据插入模块
 */
let User = require('./usersModel.js');
const deleteData = function(obj) {
  let wherestr = {uname: obj.uname};

  User.remove(wherestr, function(err, res) {
    if (err) {
      console.log('Error:' + err);
    }
    else {
      console.log('Res:' + res);
    }
  });
};

module.exports = deleteData;
