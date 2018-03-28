import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionCreators} from '../../actions/actions';
import {debug} from 'debug';

class register extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <div className="logo-wrap clearfix">
          <div className="gj-logo">
            <a target="_self" href="/">
              <img width="155" height="62"
                   alt="赶集网 更专业的分类信息网"
                   src="//stacdn201.ganjistatic1.com/src/image/logo/0206-login-logo.png"/>
            </a>
          </div>
          <div className="logo-title"><span className="user-reg">免费注册</span></div>
        </div>
        <div id="wrapper">
          <div className="clearfix reg-cont V5">
            <p className="desc">注册赶集只需10秒，发布、管理信息更轻松</p>
            <div className="login-tab" data-widget="app/ms_v2/user/register.js#switchTab">
              <ul>
                <li data-role="switch" data-action="phone" className="active"><a href="javascript:void(0);">手机快速注册</a>
                </li>
                <li className="li_fr">已有赶集网账号?<span><a
                  href="https://passport.ganji.com/login.php?next=%2F&amp;second=0&amp;login_msg=">立即登录</a></span></li>

              </ul>
            </div>

            <div className="tab-con2 js-tab js-phone">
              <div className="error-box V5" id="reg_phone_error" style={{display: 'none'}}>
                <span className="validatorMsg validatorError" id="reg_phone_error_content"/>
              </div>
              <form action="/" method="post" id="phone_register_form"
              >
                <div className="tab-cont" style={{display: 'block'}}>

                  <div className="field clearfix">
                    <label className="field-tit" htmlFor="username">用户名：</label>
                    <input value="" name="reg_username" type="text" placeholder="请填写用户名"
                           className="tab-input-text t_reg_username"/>
                    &nbsp;<span className="msg-box" id="tip_username"/>
                  </div>
                  <div className="field clearfix">
                    <label className="field-tit" htmlFor="phone">手机号：</label>
                    <input type="text" className="tab-input-text t_reg_phone" placeholder="请填写您的手机号" name="reg_phone"
                           value=""/>
                    &nbsp;<span id="tip_phone" className="msg-box"/>
                  </div>
                  <div className="field checkcode clearfix" id="checkcode"
                       data-widget="app/ms_v2/user/register.js#refleshPhoneRegImg">
                    <label className="field-tit" htmlFor="password">验证码：</label>
                    <input value="" name="checkphonecode" type="text" maxLength="4" className="input-text"
                           id="checkcode_phone_input"/>
                    <label className="fl">
                      <img id="img_phone_checkcode" data-role="reflesh" align="absmiddle"
                           src="#"/>
                    </label>
                    <a className="field-tips t_fts" data-role="reflesh">看不清？换一个</a>
                    <span id="tip_phone_checkcode" style={{width: '136px'}}/>
                    <p className="getcode clearfix">
                      <input type="button"
                             className="time-buttom" value="获取手机确认码" name="sendCodeBtn"
                             data-widget="app/ms_v2/user/register.js#sendPhoneCode" autoComplete="off"/>
                      <span className="msg-box js-msg-box">
                        <span className="validatorMsg"
                              id="tip_is_get_code"/>
                      </span>
                    </p>
                  </div>
                  <div className="field clearfix">
                    <label className="field-tit" htmlFor="phone_code">确认码：</label>
                    <input type="text" className="tab-input-text t_phone_code" name="phone_code" maxLength="6"
                           value=""/>
                    <span id="tip_phone_code"/>
                    <input type="hidden" value="/" name="next"/>
                    <input type="hidden" value="0" name="second"/>
                  </div>
                  <div className="field clearfix">
                    <label className="field-tit" htmlFor="password">密码：</label>
                    <input value="" name="phone_password" type="password" className="tab-input-text t_phone_password"
                           maxLength="16" data-widget="app/ms_v2/user/register.js#levelValid" autoComplete="off"/>
                    <span className="msg-box"
                          id="tip_phone_password">
                      <span className="validatorMsg validatorError">请填写密码</span>
                    </span>
                    <div className="pw-strength " id="level">
                      <div className="pw-bar"/>
                      <div className="pw-bar-on"/>
                      <div className="pw-txt clearfix">
                        <span>危险</span>
                        <span>一般</span>
                        <span>安全</span>
                      </div>
                    </div>
                  </div>
                  <div className="field clearfix">
                    <label className="field-tit" htmlFor="confirm-password">确认密码：</label>
                    <input value="" name="phone_password2" type="password" maxLength="16"
                           className="tab-input-text t_phone_password2" autoComplete="off"/>
                    <span className="msg-box" id="tip_phone_password2"/>
                  </div>
                  <div className="gj-agreement clearfix">
                    <div className="gj-agreement-cont"><input value="14" checked="" name="phone_affirm" type="checkbox"
                                                              className="chk-vm t_cvm" autoComplete="off"/>
                      <label htmlFor="stay-login">
                        我已阅读并同意
                        <a target="_blank"
                           href="http://www.ganji.com/misc/abouts/index.php?act=termofservice">&lt;&lt;
                          赶集服务条款&gt;&gt;</a>
                        &nbsp;和&nbsp;
                        <a target="_blank"
                           href="http://www.ganji.com/misc/abouts/index.php?act=privacy">&lt;&lt;
                          隐私权条款&gt;&gt;</a>
                      </label>
                      <span className="msg-box" id="tip_phone_affirm"/>
                    </div>
                  </div>
                  <div className="submit-box" data-widget="app/ms_v2/user/register.js#phoneRegisterIndex">
                    <input className="btn-org js-submit-btn t_submit" type="submit" value="立即注册"
                           data-role="reg_submit"/>
                    <span className="msg-submit " style={{display: 'none'}}>正在提交···</span>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
        <ul id="footer" className="clearfix">
          <li><a href="http://www.ganji.com/misc/abouts/index.php?act=about" rel="nofollow" target="_blank">关于Ganji</a>
            - <a href="http://www.ganji.com/tuiguang/index/" rel="nofollow" target="_blank">赶集推广</a>
            - <a href="http://tuiguang.ganji.com/zhaoshang/agent.htm" rel="nofollow" target="_blank"> 渠道合作</a>
            -<a href="http://www.ganji.com/newhelp/" rel="nofollow" target="_blank">帮助中心</a>
            - <a className="fc-red" href="http://www.ganji.com/newhelp/tools/" rel="nofollow" target="_blank">手机号被冒用</a>
            - <a href="http://www.ganji.com/misc/abouts/link.php?act=link" rel="nofollow" target="_blank">友情链接</a>
            - <a target="_blank" rel="nofollow" href="http://www.ganji.com/misc/abouts/index.php?act=job">招贤纳士</a>
            - <a target="_blank" href="http://www.ganji.com/quxiandaohang/">区县导航</a>
            - <a target="_blank" rel="nofollow" href="http://mobile.ganji.com/?ca_name=mobile_other_bottom">手机赶集</a>
            - <a target="_blank" href="http://3g.ganji.com">赶集网触屏版</a>
          </li>
        </ul>
      </div>
    );
  }
}

const mapState = (state) => {
  return {value: state};
};

export default connect(mapState, (dispatch) => bindActionCreators(actionCreators, dispatch))(register);
