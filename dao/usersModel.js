/**
 * 图书信息模型
 */
let mongoose = require('./DBConfig.js'),
  Schema = mongoose.Schema;

let BookSchema = new Schema({
  id: {type: Number},                     //编号
  uname: {type: String},                  //用户名
  upwd: {type: String},                   //密码
  phone: {type: String},                  //电话
  type: {type: String}                    //类型
});

module.exports = mongoose.model('User', BookSchema, 'users');
