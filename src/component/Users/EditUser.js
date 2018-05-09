import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionCreators} from '../../actions/actions';
import {debug} from 'debug';
import swal from 'sweetalert';

class editUser extends Component {
  constructor(props) {
    super();
    this.updateUser = this.updateUser.bind(this);
  }

  updateUser(e) {
    let Infor = this.props.value.currentUserInfor;
    Infor[e.target.name] = e.target.value;
    this.props.setUserInfor(Infor).then(
      console.log(this.props.value.currentUserInfor)
    );
  }

  render() {
    return (
      <div className={this.props.value.editUser ? '' : 'none'}>
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
              <form id="submitForm" name="submitForm" action="#" method="get">
                <input type="hidden" name="fyID" value="14458625716623" id="fyID"/>
                <div id="container">
                  <div id="nav_links">
                    当前位置：用户信息&nbsp;>&nbsp;<span style={{color: '#1A5CC6'}}>用户编辑</span>
                    <div id="page_close">
                      <a href="#" onClick={e => {
                        e.preventDefault();
                        this.props.showEditUser(false);
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
                        <td className="ui_text_rt">名称</td>
                        <td className="ui_text_lt">
                          <input type="text" id="fyCh"
                                 name="newUname"
                                 value={this.props.value.currentUserInfor.newUname}
                                 onChange={e => {
                                   this.updateUser(e);
                                 }}
                                 className="ui_input_txt01"/>
                        </td>
                      </tr>
                      <tr>
                        <td className="ui_text_rt">密码</td>
                        <td className="ui_text_lt">
                          <input type="text" id="fyCh"
                                 name="upwd"
                                 value={this.props.value.currentUserInfor.upwd}
                                 onChange={e => {
                                   this.updateUser(e);
                                 }}
                                 className="ui_input_txt01"/>
                        </td>
                      </tr>
                      <tr>
                        <td className="ui_text_rt">电话</td>
                        <td className="ui_text_lt">
                          <input type="text" id="fyZongMj" name="phone"
                                 value={this.props.value.currentUserInfor.phone}
                                 onChange={e => {
                                   this.updateUser(e);
                                 }}
                                 className="ui_input_txt01"/>
                        </td>
                      </tr>
                      <tr>
                        <td>&nbsp;</td>
                        <td className="ui_text_lt">
                          &nbsp;<input id="submitbutton" type="button" value="提交" className="ui_input_btn01"
                                       onClick={() => {
                                         this.props.updateUsers(this.props.value.currentUserInfor).then(
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

export default connect(mapState, (dispatch) => bindActionCreators(actionCreators, dispatch))(editUser);
