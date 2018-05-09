import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionCreators} from '../../actions/actions';
import {debug} from 'debug';
import swal from 'sweetalert';

class insertUser extends Component {
  constructor(props) {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className={this.props.value.insertUser ? '' : 'none'}>
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
                    action="http://127.0.0.1:3000/userInsert" method="get"
                    target="id_iframe"
                    onSubmit={() => {
                      swal('', '提交成功!', 'success');
                    }}
              >
                <div id="container">
                  <div id="nav_links">
                    当前位置：用户信息&nbsp;>&nbsp;<span style={{color: '#1A5CC6'}}>用户编辑</span>
                    <div id="page_close">
                      <a href="#" onClick={e => {
                        e.preventDefault();
                        this.props.showInsertUser(false);
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
                        <td className="ui_text_rt">编号</td>
                        <td className="ui_text_lt">
                          <input type="text" id="fyCh"
                                 name="uname"
                                 className="ui_input_txt01"/>
                        </td>
                      </tr>
                      <tr>
                        <td className="ui_text_rt">名称</td>
                        <td className="ui_text_lt">
                          <input type="text" id="fyCh"
                                 name="uname"
                                 className="ui_input_txt01"/>
                        </td>
                      </tr>
                      <tr>
                        <td className="ui_text_rt">密码</td>
                        <td className="ui_text_lt">
                          <input type="text" id="fyCh"
                                 name="upwd"
                                 className="ui_input_txt01"/>
                        </td>
                      </tr>
                      <tr>
                        <td className="ui_text_rt">电话</td>
                        <td className="ui_text_lt">
                          <input type="text" id="fyZongMj" name="phone"
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

export default connect(mapState, (dispatch) => bindActionCreators(actionCreators, dispatch))(insertUser);
