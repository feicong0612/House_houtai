/**
 * 数据插入模块
 */
let House = require("./housesModel.js");
const insertData = function(obj) {
  let id = '';
  let title = obj.title;
  let location = obj.location;
  let community = obj.community;
  let way = obj.way;
  let area = obj.area;
  let rent = obj.rent;
  let room = obj.room;
  let toward = obj.toward;
  let video = obj.video;
  let phone = obj.phone;
  let type = 2;

  let house = new House({
    id: id,
    title: title,
    location: location,
    community: community,
    way: way,
    area: area,
    rent: rent,
    room: room,
    toward: toward,
    video: video,
    phone: phone,
    type: type,
  });

  house.save(function(err, res) {

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
