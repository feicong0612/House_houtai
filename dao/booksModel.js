/**
 * 图书信息模型
 */
let mongoose = require('./DBConfig.js'),
  Schema = mongoose.Schema;

let BookSchema = new Schema({
  id: {type: Number},                    //ISBN编码
  title: {type: String},                  //书名
  type: {type: String},                   //类型
  addTime: {type: Date},                  //添加时间
  updateTime: {type: Date}                //修改时间
});

module.exports = mongoose.model('Book', BookSchema, 'bookInfo');
