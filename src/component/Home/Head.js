import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionCreators} from '../../actions/actions';
import {debug} from 'debug';

class Head extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div id="header">
        <div className="head f-w1190 clearfix">
          <div className="city">
            <a className="fc-city" href="http://nc.ganji.com" title="">南昌</a>
            <a href="http://www.ganji.com/index.htm">[切换城市]</a>
          </div>
          <div className="head-m">
            <ul className="column-list clearfix">
              <li>
                <a className="column" href="http://nc.ganji.com/" title="" target="_blank">赶集首页</a>
                <i className="column-arrow"/>
              </li>
            </ul>
          </div>
          <div className="head-r clearfix">
            <div className="f-fl">
              <div className="ganji-dingdong" data-widget="app/ms_v2/common/base_page.js#hoverWidget">
                <a target="_blank" rel="nofollow" href="http://mobile.ganji.com/?ifid=index_banner_up"
                   className="dingdong-pop  ganji-phone-pop"
                   data-role="activeBlock">
                  <span className="arrow"/>
                  <div className="pic-area">
                    <div className="ewm"/>
                    <p>扫一扫，上赶集群组</p>
                  </div>
                  <div className="txt-area">
                    <p className="p1 f14">扫码使用<span className="f16">“赶集群组”</span></p>
                    <p className="p2 f14 fb">交友&nbsp;&nbsp;寻爱&nbsp;&nbsp;找工作</p>
                    <p className="p2 f14 fb">聊天&nbsp;&nbsp;聚会&nbsp;&nbsp;不寂寞</p>
                  </div>
                </a>
                <a target="_blank" rel="nofollow" title="手机赶集"
                   href="http://mobile.ganji.com/?ca_name=mobile_home_navb" className="column mobile-icon">手机赶集</a>
              </div>
            </div>
            <div className="f-fl">
              <div className="column ganji-dingdong" data-widget="app/ms_v2/common/base_page.js#hoverWidget">
                <a href="http://dingdong.ganji.com/" gjalog="/dingdong@name=weixin_dingdong@atype=click"
                   className="dingdong-pop" target="_blank" data-role="activeBlock">
                  <span className="arrow"/>
                  <div className="pic-area">
                    <div className="ewm"/>
                    <p>扫一扫，手机上叮咚</p>
                  </div>
                  <div className="txt-area">
                    <p className="p1 f14">微信绑定<span className="f16">“赶集叮咚”</span></p>
                    <p className="p2 f14 fb">刷新置顶&nbsp;&nbsp;&nbsp;&nbsp;收发消息</p>
                    <p className="p2 f14 fb">访客提醒&nbsp;&nbsp;&nbsp;&nbsp;轻松搞定</p>
                  </div>
                </a>
                <a target="_blank" rel="nofollow" title="赶集叮咚" href="http://dingdong.ganji.com"
                   gjalog="/dingdong@name=ding_dong_shouye@atype=click">赶集叮咚</a>
              </div>
            </div>
            <div className="f-fl">
              <li data-widget="app/ms_v2/common/base_page.js#hoverWidget" className="top-nav fl">
                <a className="top-nav-btn clearfix js-btn" rel="nofollow" href="http://nc.ganji.com/tuiguang/">
                  我要推广
                  <em className="topnav-arrow"/>
                </a>
                <ul className="top-nav-list">
                  <li>
                    <a rel="nofollow"
                       href="http://nc.ganji.com/tuiguang/zhaopin/bangbang/">招聘推广</a>
                  </li>
                  <li>
                    <a rel="nofollow"
                       href="http://nc.ganji.com/tuiguang/fang/bangbang/">房产推广</a>
                  </li>
                  <li>
                    <a rel="nofollow"
                       href="http://nc.ganji.com/tuiguang/fuwu/bangbang/">本地服务</a>
                  </li>
                  <li>
                    <a rel="nofollow"
                       href="http://nc.ganji.com/tuiguang/che/bangbang/">车辆推广</a>
                  </li>
                  <li>
                    <a rel="nofollow"
                       href="http://nc.ganji.com/tuiguang/wu/bangbang/">二手推广</a>
                  </li>
                  <li>
                    <a rel="nofollow"
                       href="http://nc.ganji.com/tuiguang/chongwu/bangbang/">宠物推广</a>
                  </li>
                </ul>
              </li>
            </div>

            <div className="f-fl reg-login" data-widget="app/ms_v2/common/base_page.js#userinfoWidget">
                <span className="reg-login-btn clearfix">
                  <a rel="nofollow" className="reg js-signup-btn"
                     href="http://www.ganji.com/user/register.php?next=http%3A%2F%2Fnc.ganji.com%3A%2Ffang1%2Fanyi%2F"
                     title="免费注册" target="_self">免费注册</a>
                  <a rel="nofollow" className="login js-signin-btn"
                     href="https://passport.ganji.com/login.php?next=http%3A%2F%2Fnc.ganji.com%3A%2Ffang1%2Fanyi%2F"
                     title="会员登录" target="_self">会员登录</a>
                </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {value: state};
};

export default connect(mapState, (dispatch) => bindActionCreators(actionCreators, dispatch))(Head);
