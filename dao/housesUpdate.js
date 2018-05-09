/*
*搜索功能模块
* */
let House = require('./housesModel');

const updateData = (wherestr = null, sort = {'id': 1}, callback) => {
  let updatestr = wherestr;
  //名称
  let findstr = {title: wherestr.oldTitle};
  delete updatestr.oldTitle;

  House.update(findstr, updatestr, function(err, res) {
    if (err) {
      console.log('Error:' + err);
    }
    else {
      console.log('Res:' + res);
    }
  });

};

module.exports = updateData;
