/*
*搜索功能模块
* */
let User = require('./usersModel.js');

const updateData = (wherestr = null, sort = {'id': 1}, callback) => {
  let updatestr = wherestr;
  //名称
  let findstr = {uname: wherestr.oldUname};
  delete updatestr.oldUname;

  User.update(findstr, updatestr, function(err, res) {
    if (err) {
      console.log('Error:' + err);
    }
    else {
      console.log('Res:' + res);
    }
  });

};

module.exports = updateData;
