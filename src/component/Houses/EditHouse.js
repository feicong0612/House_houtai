import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionCreators} from '../../actions/actions';
import {debug} from 'debug';
import swal from 'sweetalert';

class editHouse extends Component {
  constructor(props) {
    super();
    this.updateHouse = this.updateHouse.bind(this);
  }

  updateHouse(e) {
    let Infor = this.props.value.currentHouseInfor;
    Infor[e.target.name] = e.target.value;
    this.props.setHouseInfor(Infor).then(
      console.log(this.props.value.currentHouseInfor)
    );
  }

  render() {
    return (
      <div className={this.props.value.editHouse ? '' : 'none'}>
        <div id="fancybox-wrap" style={{width: '753px', height: 'auto', top: '20px', left: '100px', display: 'block'}}>
          <div id="fancybox-outer">
            <div className="fancybox-bg" id="fancybox-bg-n"/>
            <div className="fancybox-bg" id="fancybox-bg-ne"/>
            <div className="fancybox-bg" id="fancybox-bg-e"/>
            <div className="fancybox-bg" id="fancybox-bg-se"/>
            <div className="fancybox-bg" id="fancybox-bg-s"/>
            <div className="fancybox-bg" id="fancybox-bg-sw"/>
            <div className="fancybox-bg" id="fancybox-bg-w"/>
            <div className="fancybox-bg" id="fancybox-bg-nw"/>
            <div id="fancybox-content" style={{borderWidth: '10px', width: '733px', height: '520px'}}>
              <form id="submitForm" name="submitForm" action="#" method="post">
                <input type="hidden" name="fyID" value="14458625716623" id="fyID"/>
                <div id="container">
                  <div id="nav_links">
                    当前位置：房源信息&nbsp;>&nbsp;<span style={{color: '#1A5CC6'}}>房源编辑</span>
                    <div id="page_close">
                      <a href="#" onClick={e => {
                        e.preventDefault();
                        this.props.showEditHouse(false);
                      }}>
                        <img src="/public/images/common/page_close.png"
                             width="20" height="20" style={{verticalAlign: 'text-top'}}/>
                      </a>
                    </div>
                  </div>
                  <div className="ui_content">
                    <table cellSpacing="0" cellPadding="0" width="100%" align="left" border="0">
                      <tbody>
                      <tr>
                        <td className="ui_text_rt">标题</td>
                        <td className="ui_text_lt">
                          <input type="text" id="fyCh"
                                 name="newTitle"
                                 className="ui_input_txt01"
                                 value={this.props.value.currentHouseInfor.newTitle}
                                 onChange={e => {
                                   this.updateHouse(e);
                                 }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="ui_text_rt" width="80">位置</td>
                        <td className="ui_text_lt">
                          <select name="location"
                                  id="fyXq"
                                  value={this.props.value.currentHouseInfor.location}
                                  onChange={e => {
                                    this.updateHouse(e);
                                  }}
                                  className="ui_select01">
                            <option value="">--请选择--</option>
                            <option value="新北区">新北区</option>
                            <option value="武进区">武进区</option>
                            <option value="天宁区">天宁区</option>
                            <option value="钟楼区">钟楼区</option>
                            <option value="溧阳市">溧阳市</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td className="ui_text_rt">小区</td>
                        <td className="ui_text_lt">
                          <input type="text" id="fyCh"
                                 name="community"
                                 className="ui_input_txt01"
                                 value={this.props.value.currentHouseInfor.community}
                                 onChange={e => {
                                   this.updateHouse(e);
                                 }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="ui_text_rt" width="80">方式</td>
                        <td className="ui_text_lt">
                          <select name="way"
                                  id="fyXq"
                                  value={this.props.value.currentHouseInfor.way}
                                  onChange={e => {
                                    this.updateHouse(e);
                                  }}
                                  className="ui_select01">
                            <option value="">--请选择--</option>
                            <option value="整租">整租</option>
                            <option value="合租">合租</option>
                            <option value="购买">购买</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td className="ui_text_rt">面积</td>
                        <td className="ui_text_lt">
                          <input type="text" id="fyZongMj" name="area"
                                 className="ui_input_txt01"
                                 value={this.props.value.currentHouseInfor.area}
                                 onChange={e => {
                                   this.updateHouse(e);
                                 }}
                          />㎡
                        </td>
                      </tr>
                      <tr>
                        <td className="ui_text_rt">价格</td>
                        <td className="ui_text_lt">
                          <input type="text" id="fyJizuMj" name="rent"
                                 className="ui_input_txt01"
                                 value={this.props.value.currentHouseInfor.rent}
                                 onChange={e => {
                                   this.updateHouse(e);
                                 }}
                          />㎡/月
                        </td>
                      </tr>
                      <tr>
                        <td className="ui_text_rt">户型</td>
                        <td className="ui_text_lt">
                          <select name="type"
                                  id="submitForm_fangyuanEntity_fyHxCode"
                                  value={this.props.value.currentHouseInfor.type}
                                  onChange={e => {
                                    this.updateHouse(e);
                                  }}
                                  className="ui_select01">
                            <option value="">--请选择--</option>
                            <option value="1室">一室</option>
                            <option value="2室">两室</option>
                            <option value="3室">三室</option>
                            <option value="4室">四室</option>
                            <option value="5室">五室</option>
                            <option value="5室以上">五室以上</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td className="ui_text_rt">类型</td>
                        <td className="ui_text_lt">
                          <select name="room"
                                  id="submitForm_fangyuanEntity_fyJianzhuJiegou"
                                  value={this.props.value.currentHouseInfor.room}
                                  onChange={e => {
                                    this.updateHouse(e);
                                  }}
                                  className="ui_select01">
                            <option value="">--请选择--</option>
                            <option value="普通住宅">普通住宅</option>
                            <option value="平房">平房</option>
                            <option value="别墅">别墅</option>
                            <option value="公寓">公寓</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td className="ui_text_rt">朝向</td>
                        <td className="ui_text_lt">
                          <select name="toward"
                                  id="submitForm_fangyuanEntity_zulinXingzhi"
                                  value={this.props.value.currentHouseInfor.toward}
                                  onChange={e => {
                                    this.updateHouse(e);
                                  }}
                                  className="ui_select01">
                            <option value="">--请选择--</option>
                            <option value="东">东</option>
                            <option value="南">南</option>
                            <option value="西">西</option>
                            <option value="北">北</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td className="ui_text_rt">视频</td>
                        <td className="ui_text_lt">
                          &nbsp;
                          <input type="file" id="fyJizuMj" name="video"
                                 className=""/>
                        </td>
                      </tr>
                      <tr>
                        <td className="ui_text_rt">用户编号</td>
                        <td className="ui_text_lt">
                          <input type="text" id="fyJizuMj" name="user"
                                 value={this.props.value.currentHouseInfor.user}
                                 onChange={e => {
                                   this.updateHouse(e);
                                 }}
                                 className="ui_input_txt01"/>
                        </td>
                      </tr>
                      <tr>
                        <td className="ui_text_rt">电话</td>
                        <td className="ui_text_lt">
                          <input type="text" id="fyJizuMj" name="phone"
                                 value={this.props.value.currentHouseInfor.phone}
                                 onChange={e => {
                                   this.updateHouse(e);
                                 }}
                                 className="ui_input_txt01"/>
                        </td>
                      </tr>
                      <tr>
                        <td>&nbsp;</td>
                        <td className="ui_text_lt">
                          &nbsp;<input id="submitbutton"
                                       type="button" value="提交"
                                       className="ui_input_btn01"
                                       onClick={() => {
                                         this.props.updateHouses(this.props.value.currentHouseInfor).then(
                                           data => {
                                             if (data.type === 'SUCCESS') {
                                               swal('', '修改成功!', 'success');
                                             }
                                           }
                                         );
                                       }}
                        />
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </form>
            </div>
            <a id="fancybox-close"/>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {value: state};
};

export default connect(mapState, (dispatch) => bindActionCreators(actionCreators, dispatch))(editHouse);
