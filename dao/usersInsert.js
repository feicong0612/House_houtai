/**
 * 数据插入模块
 */
let User = require('./usersModel.js');
const insertData = function(obj) {
  let id = '';
  if (obj.id) {
    id = obj.id;
  }
  let uname = obj.uname;
  let upwd = obj.upwd;
  let phone = obj.phone;
  let type = 2;

  let user = new User({
    id: id,
    uname: uname,
    upwd: upwd,
    phone: phone,
    type: type,
  });
  user.save(function(err, res) {

    if (err) {
      console.log('Error:' + err);
    }
    else {
      console.log('插入数据成功！');
      console.log('Res:' + res);
    }
  });
};

module.exports = insertData;
