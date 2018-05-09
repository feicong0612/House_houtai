import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionCreators} from '../../actions/actions';
import {debug} from 'debug';
import swal from 'sweetalert';

class insertHouse extends Component {
  constructor(props) {
    super();
    this.state = {
      insertHouse: false
    };
  }

  render() {
    return (
      <div className={this.props.value.insertHouse ? '' : 'none'}>
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
              <form id="submitForm" name="submitForm"
                    action="http://127.0.0.1:3000/houseInsert"
                    method="get"
                    target="id_iframe"
                    onSubmit={() => {
                      swal('', '提交成功!', 'success');
                    }}
              >
                <input type="hidden" name="fyID" value="14458625716623" id="fyID"/>
                <div id="container">
                  <div id="nav_links">
                    当前位置：房源信息&nbsp;>&nbsp;<span style={{color: '#1A5CC6'}}>房源编辑</span>
                    <div id="page_close">
                      <a href="#" onClick={e => {
                        e.preventDefault();
                        this.props.showInsertHouse(false);
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
                                   name="title"
                                   className="ui_input_txt01"/>
                          </td>
                        </tr>
                        <tr>
                          <td className="ui_text_rt" width="80">位置</td>
                          <td className="ui_text_lt">
                            <select name="location"
                                    id="fyXq"
                                    defaultValue="1"
                                    className="ui_select01">
                              <option value="">--请选择--</option>
                              <option value="1">新北区</option>
                              <option value="2">武进区</option>
                              <option value="3">天宁区</option>
                              <option value="4">钟楼区</option>
                              <option value="5">溧阳市</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td className="ui_text_rt">小区</td>
                          <td className="ui_text_lt">
                            <input type="text" id="fyCh"
                                   name="community"
                                   className="ui_input_txt01"/>
                          </td>
                        </tr>
                        <tr>
                          <td className="ui_text_rt" width="80">方式</td>
                          <td className="ui_text_lt">
                            <select name="way"
                                    id="fyXq"
                                    defaultValue="1"
                                    className="ui_select01">
                              <option value="">--请选择--</option>
                              <option value="1">整租</option>
                              <option value="2">合租</option>
                              <option value="3">购买</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td className="ui_text_rt">面积</td>
                          <td className="ui_text_lt">
                            <input type="text" id="fyZongMj" name="area"
                                   className="ui_input_txt01"/>㎡
                          </td>
                        </tr>
                        <tr>
                          <td className="ui_text_rt">价格</td>
                          <td className="ui_text_lt">
                            <input type="text" id="fyJizuMj" name="rent"
                                   className="ui_input_txt01"/>㎡/月
                          </td>
                        </tr>
                        <tr>
                          <td className="ui_text_rt">户型</td>
                          <td className="ui_text_lt">
                            <select name="type"
                                    id="submitForm_fangyuanEntity_fyHxCode"
                                    defaultValue="1"
                                    className="ui_select01">
                              <option value="">--请选择--</option>
                              <option value="1">一室</option>
                              <option value="2">两室</option>
                              <option value="3">三室</option>
                              <option value="4">四室</option>
                              <option value="5">五室</option>
                              <option value="6">五室以上</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td className="ui_text_rt">类型</td>
                          <td className="ui_text_lt">
                            <select name="room"
                                    id="submitForm_fangyuanEntity_fyJianzhuJiegou"
                                    defaultValue="1"
                                    className="ui_select01">
                              <option value="">--请选择--</option>
                              <option value="1">普通住宅</option>
                              <option value="2">平房</option>
                              <option value="3">酒店</option>
                              <option value="4">公寓</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td className="ui_text_rt">朝向</td>
                          <td className="ui_text_lt">
                            <select name="toward"
                                    id="submitForm_fangyuanEntity_zulinXingzhi"
                                    defaultValue="1"
                                    className="ui_select01">
                              <option value="">--请选择--</option>
                              <option value="1">东</option>
                              <option value="2">南</option>
                              <option value="3">西</option>
                              <option value="4">北</option>
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
                            <input type="text" id="fyJizuMj" name="user" defaultValue="1"
                                   className="ui_input_txt01"/>
                          </td>
                        </tr>
                        <tr>
                          <td className="ui_text_rt">电话</td>
                          <td className="ui_text_lt">
                            <input type="text" id="fyJizuMj" name="phone"
                                   className="ui_input_txt01"/>
                          </td>
                        </tr>
                        <tr>
                          <td>&nbsp;</td>
                          <td className="ui_text_lt">
                            &nbsp;<input id="submitbutton" type="submit" value="提交" className="ui_input_btn01"/>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </form>
              <iframe id="id_iframe" name="id_iframe" style={{display: 'none'}}/>
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

export default connect(mapState, (dispatch) => bindActionCreators(actionCreators, dispatch))(insertHouse);
