/**
 * 图书信息模型
 */
let mongoose = require('./DBConfig.js'),
  Schema = mongoose.Schema;

let HouseSchema = new Schema({
  id: {type: Number},                     //编号
  title: {type: String},                  //标题
  location: {type: String},               //位置
  way: {type: String},                    //方式
  area: {type: String},                   //面积
  rent: {type: Number},                   //租金
  type: {type: String},                   //类型
  room: {type: String},                   //房型
  toward: {type: String},                 //朝向
  user: {type: String},                   //房东
  phone: {type: String},                  //电话
  community: {type: String},              //详细地址
  video: {type: String},                  //视频
  isonsale: {type: String},               //是否已交易
});

module.exports = mongoose.model('House', HouseSchema, 'houses');
