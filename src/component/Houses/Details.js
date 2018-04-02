import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionCreators} from '../../actions/actions';
import {debug} from 'debug';
import Brumb from '../SelectHouse/Brumb';

class details extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <Brumb/>
        <div className="f-card  f-w1190 f-clear f-b30">
          <div className="card-img f-fl js-basic-imgs-big basic-imgs" data-widget="app/ms_v2/widget/slideshow_v2.js"
               data-premier="">
            <div data-widget="app/ms_v2/housing_v2/detail.js#viewFullScreen">
              <div className="big-img" data-widget="app/ms_v2/housing_v2/detail.js#videoControl">
                <span className="ui-slide-helper"/>
                <div className="big-all">
                  <p className="big-account">
                    <span className="js-small-current">3</span>/<span className="js-small-num">4</span>
                  </p>
                  <p className="big-mark"/>
                </div>
                <div className="big-img-wrap">
                  <img alt="安义县印刷厂小区,看房随时,朝南户型,采光好" title="安义县印刷厂小区,看房随时,朝南户型,采光好"
                       src="http://tct3.ganjistatic1.com/gjfsqq/8c50db30b4e04c0bb6466bed3ceca3e5_540-405_6-0.jpg"
                       data-role="img"/>
                </div>
              </div>
              <div className="small-img">
                <ul className="small-wrap f-clear" data-role="thumbs">
                  <li className="small-item" data-index="0"
                      data-image="http://tct3.ganjistatic1.com/gjfsqq/cd795d680aee4fd697e346b03ef02f3a_540-405_6-0.jpg"
                      data-link="http://tct3.ganjistatic1.com/gjfsqq/cd795d680aee4fd697e346b03ef02f3a_600-450_6-0.jpg"
                      data-role="thumb">
                    <a href="">
                      <img alt="安义县印刷厂小区,看房随时,朝南户型,采光好" title="安义县印刷厂小区,看房随时,朝南户型,采光好"
                           src="http://tct3.ganjistatic1.com/gjfsqq/cd795d680aee4fd697e346b03ef02f3a_90-75c_6-0.jpg"/>
                    </a>
                  </li>
                  <li className="small-item" data-index="1"
                      data-image="http://tct3.ganjistatic1.com/gjfsqq/1c4ec33ce37741e8b0015b6ee8e4cb0e_540-405_6-0.jpg"
                      data-link="http://tct3.ganjistatic1.com/gjfsqq/1c4ec33ce37741e8b0015b6ee8e4cb0e_600-450_6-0.jpg"
                      data-role="thumb">
                    <a href="">
                      <img alt="安义县印刷厂小区,看房随时,朝南户型,采光好" title="安义县印刷厂小区,看房随时,朝南户型,采光好"
                           src="http://tct3.ganjistatic1.com/gjfsqq/1c4ec33ce37741e8b0015b6ee8e4cb0e_90-75c_6-0.jpg"/>
                    </a>
                  </li>
                  <li className="small-item active" data-index="2"
                      data-image="http://tct3.ganjistatic1.com/gjfsqq/8c50db30b4e04c0bb6466bed3ceca3e5_540-405_6-0.jpg"
                      data-link="http://tct3.ganjistatic1.com/gjfsqq/8c50db30b4e04c0bb6466bed3ceca3e5_600-450_6-0.jpg"
                      data-role="thumb">
                    <a href="">
                      <img alt="安义县印刷厂小区,看房随时,朝南户型,采光好" title="安义县印刷厂小区,看房随时,朝南户型,采光好"
                           src="http://tct3.ganjistatic1.com/gjfsqq/8c50db30b4e04c0bb6466bed3ceca3e5_90-75c_6-0.jpg"/>
                    </a>
                  </li>
                  <li className="small-item" data-index="3"
                      data-image="http://tct3.ganjistatic1.com/gjfsqq/20453762478b48f8b9a07e08d9451dd1_540-405_6-0.jpg"
                      data-link="http://tct3.ganjistatic1.com/gjfsqq/20453762478b48f8b9a07e08d9451dd1_600-450_6-0.jpg"
                      data-role="thumb">
                    <a href="">
                      <img alt="安义县印刷厂小区,看房随时,朝南户型,采光好" title="安义县印刷厂小区,看房随时,朝南户型,采光好"
                           src="http://tct3.ganjistatic1.com/gjfsqq/20453762478b48f8b9a07e08d9451dd1_90-75c_6-0.jpg"/>
                    </a>
                  </li>
                </ul>
                <div className="basic-imgs-btn prev" data-role="arrow"><a title="" href="#" className="btn-prev"/></div>
                <div className="basic-imgs-btn next" data-role="arrow"><a title="" href="#" className="btn-next"/></div>
              </div>
            </div>
          </div>
          <div className="card-info f-fr">
            <div className="card-top">

              <p className="card-title">

                <i>安义县印刷厂小区,看房随时,朝南户型,采光好</i>

              </p>
              <div className="card-status f-clear">

                <ul className="card-status-left f-fl">
                  <li className="date">1分钟前</li>
                  <li className="browse">
                    <span id="pageviews" data-widget="app/ms_v2/housing_v2/detail.js#getPageView"
                          data-text-format=" %s "> 3 </span>次浏览
                  </li>
                </ul>

                <ul className="card-status-right f-fr">
                  <li className="collect">
                    <span className="bg-span" data-premier="">
                      <a rel="nofollow" href="">收藏</a>
                    </span>
                  </li>
                  <li className="tophone"
                      data-widget="app/ms_v2/housing_v2/detail.js#phoneCode">
                    <a href="" rel="nofollow">发送至手机</a>
                    <div className="phone_code" data-role="phoneCode" style={{display: 'none'}}>
                      <div className="phone_code_wrap"><img
                        src=""/>
                        <p className="code_text">扫码查看房源</p></div>
                    </div>
                  </li>
                  <li className="report">
                    <span className="bg-span bdshare_b">
                      <a rel="nofollow" href=""
                         data-anxuan="false" data-anxuan-login-id="" data-premier="false"
                         data-widget="app/ms_v2/housing_v2/detail.js#newReport" className="fr link-999">
                        <i className="ico-report"/>举报</a>
                    </span>
                  </li>
                  <div id="reportBar" className="report-column pr" style={{display: 'none'}}>
                    <i className="jianjiao icon"/>
                    <a href="http://www.ganji.com/newhelp/tools/?voteTypeId=20017" target="_blank">电话被冒用</a>
                    <a href="" target="_blank">信息虚假违法</a>
                  </div>
                </ul>
              </div>


              <div className="modal-cover" style={{display: 'none'}}/>
              <div id="reportModal" className="report-modal" style={{display: 'none'}}>
                <div className="report-m-close"/>
                <div className="report-content">
                  <h3>举报类型 <span>(选填，可多选)</span></h3>
                  <ul>
                    <li data-value="13">
                      <i/>房源无法带看
                    </li>
                    <li data-value="3" className="active">
                      <i/>图片与实际不符
                    </li>
                    <li data-value="14">
                      <i/>价格与实际差异较大
                    </li>
                    <li data-value="15">
                      <i/>房源不在该小区
                    </li>
                    <li data-value="5">
                      <i/>其它
                    </li>
                  </ul>
                  <h3>描述 <span>(必填)</span></h3>
                  <textarea id="report_desc" className="report-desc error" placeholder="在此填写详细举报内容，20个汉字以上，100个汉字以内；"/>
                  <div className="report-submit">选择提交</div>
                </div>
              </div>

              <ul className="card-pay f-clear">
                <li className="price">
                  <span className="rmb">¥</span>
                  <span className="num">700</span>
                  <span className="month">/月</span>
                </li>


                <li className="month-pay">
                  <a rel="nofollow" href="" target="_blank">快速贷款&gt;</a>
                </li>
              </ul>

              <p className="sale"/>

              <ul className="er-list f-clear">
                <li className="item f-fl">
                  <span className="t">户<i className="space"/>型：</span><span className="content">1室1厅1卫</span>
                </li>
                <li className="item f-fl">
                  <span className="t">面<i className="space"/>积：</span><span className="content">整租&nbsp;&nbsp;
                  49㎡</span>
                </li>
                <li className="item f-fl">
                  <span className="t">朝<i className="space"/>向：</span><span className="content">东向</span>
                </li>
                <li className="item f-fl">
                  <span className="t">楼<i className="space"/>层：</span><span className="content">低层/共15层</span>
                </li>
                <li className="item f-fl">
                  <span className="t">电梯情况：</span><span className="content">有电梯</span></li>

                <li className="item f-fl">
                  <span className="t">装修情况：</span><span className="content">豪华装修</span></li>
              </ul>

              <ul className="er-list-two f-clear">
                <li className="er-item f-fl">
                  <span className="t2">小区名称：</span>
                  <span className="content">
                    <a className="blue" href="/" target="_blank">安义县印刷厂小区</a>
                    共
                    <span className="blue">
                      <a className="blue" rel="nofollow" href="/">63条</a>
                    </span>
                    出租帖子
                  </span>
                </li>
                <li className="er-item f-fl">
                  <span className="t2">所在地址：</span>
                  <span className="content">
                    <a className="blue" href="/">安义</a>
                    -
                    <a className="blue" href="/">龙津</a>
                    -
                    <a className="blue" href="">文峰路</a>
                  </span>
                </li>
              </ul>
            </div>
            <div className="card-user">

              <a className="head_wrap" target="_blank"
                 href="http://www.ganji.com/common/user_post_list.php?url=fang1&amp;userId=744881037&amp;phone=">
                <img className="head" src="http://stacdn201.ganjistatic1.com/src/image/v5/detail_user_header.png"/>
              </a>


              <div className="user-info f-clear small-company">
                <div className="user-info-top">
                  <p className="name">
                    乐女士(个人)
                    <i className="detail-icon icon-phone js-icon-renzheng" data-tip="手机已认证" data-left="17px"/>
                    <i className="detail-icon icon-weixin-gray js-icon-renzheng" data-tip="微信未认证" data-left="42px"/>
                    <i className="detail-icon icon-zhima-gray js-icon-renzheng" data-tip="芝麻未认证" data-left="69px"/>
                    <i className="detail-icon icon-renlian-gray js-icon-renzheng" data-tip="人脸未认证" data-left="95px"/>
                    <i className="detail-icon icon-tip"/>
                    <input type="hidden" id="user_id_hide" value="744881037"/>
                    <input type="hidden" id="house_id_hide" value=""/>
                  </p>
                  <div className="user_other">
                    <a target="_blank" className="person_log" href="">查看发帖记录&gt;</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="f-clear">

              <div className="card_info f-clear">
                <div className="c_phone f-clear" data-widget="app/ms_v2/housing_v2/detail.js#viewPersonalPhone"
                     id="s_part_phone" name="s_part_phone">
                  <div className="icon"><span/></div>
                  <div className="phone">
                    <a className="phone_num js-all-phone">扫码查看联系电话</a>
                  </div>
                </div>
                <span className="f_c_b">
                  <span name="1162509_1_2_2700" id="imjs-embed-user-744881037"
                        className="talkBtn imjs-embed-user webim-embed-user-offline"
                        style={{display: 'inline-block'}}/>
                  <div className="dingdong-tips" style={{display: 'none'}}>
                    <a className="dingdong-tips-close"
                       style={{cursor: 'pointer'}}>&nbsp;
                    </a>
                    <a href="http://dingdong.ganji.com"
                       target="_blank" className="dingdong-tips-view-more">&nbsp;
                    </a>
                  </div>
                  <span className="imjs-user-online">
                    <a href="javascript:" className="mew_im f-clear">
                      <p className="icon"/>
                      <p className="content">微聊</p>
                    </a>
                  </span>
                  <span className="imjs-user-offline">
                    <a href="javascript:" className="mew_im f-clear">
                      <p className="icon"/>
                      <p className="content">微聊</p>
                    </a>
                  </span>
                </span>
              </div>
              <input type="hidden" id="fphone" value="MTg0NzQzOTg3MjkyMA=="/>
              <input type="hidden" id="ca_id" value="20"/>
              <input type="hidden" id="puid" value="2993281014"/>
              <input type="hidden" id="street" value="longjin"/>
              <input type="hidden" id="house_type" value="1"/>
              <div className="card-tel" style={{display: 'none'}} id="s_full_phone" name="s_full_phone">
                <em className="contact-mobile" id="phone_con"/>
              </div>
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

export default connect(mapState, (dispatch) => bindActionCreators(actionCreators, dispatch))(details);
