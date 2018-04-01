import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionCreators} from '../../actions/actions';
import {debug} from 'debug';


class release extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="global_wrap clear zxbj_details" id="gloWrap">
        <div className="con">
          <div className="con_bj clear">
            <div className="con_bj_cal col_l" id="tender-video-form">
              <h3 className="calputer_tit">装修计算器<span>今天已有 <em className="num_man">1878</em> 位业主获取了装修预算</span></h3>
              <form id="new_base_info">
                <div className="mod_form bj_form">
                  <div className="form_line">
                    <label htmlFor="" className="label"><em className="label_start">*</em>所在城市：</label>
                    <div className="element">
                      <div className="clear">
                        <input type="hidden" name="dangci" value="jianzhuang"/>
                        <select id="User_Shen" name="shen" className="select select_s col_l">
                          <option value="">省/市</option>
                          <option value="安徽">A 安徽</option>
                          <option value="北京">B 北京</option>
                          <option value="重庆">C 重庆</option>
                          <option value="福建">F 福建</option>
                          <option value="广西">G 广西</option>
                          <option value="贵州">G 贵州</option>
                          <option value="广东">G 广东</option>
                          <option value="甘肃">G 甘肃</option>
                          <option value="海南">H 海南</option>
                          <option value="湖北">H 湖北</option>
                          <option value="黑龙江">H 黑龙江</option>
                          <option value="河南">H 河南</option>
                          <option value="河北">H 河北</option>
                          <option value="湖南">H 湖南</option>
                          <option value="江苏">J 江苏</option>
                          <option value="吉林">J 吉林</option>
                          <option value="江西">J 江西</option>
                          <option value="辽宁">L 辽宁</option>
                          <option value="内蒙古">N 内蒙古</option>
                          <option value="宁夏">N 宁夏</option>
                          <option value="澳门">O 澳门</option>
                          <option value="青海">Q 青海</option>
                          <option value="四川">S 四川</option>
                          <option value="陕西">S 陕西</option>
                          <option value="上海">S 上海</option>
                          <option value="山东">S 山东</option>
                          <option value="山西">S 山西</option>
                          <option value="台湾">T 台湾</option>
                          <option value="天津">T 天津</option>
                          <option value="西藏">X 西藏</option>
                          <option value="香港">X 香港</option>
                          <option value="新疆">X 新疆</option>
                          <option value="云南">Y 云南</option>
                          <option value="浙江">Z 浙江</option>
                        </select>
                        <select id="User_City" name="city" className="select select_s col_l">
                          <option value="">市/地区</option>
                        </select>
                        <div style={{display: 'none'}}>
                          <select className="langSelect" id="User_Town" name="town">
                            <option value="">县/市</option>
                          </select></div>
                      </div>
                    </div>
                  </div>
                  <div className="form_line">
                    <label htmlFor="" className="label"><em className="label_start">*</em>房屋面积：</label>
                    <div className="element">
                      <div className="text_wrap">
                        <input type="text" className="text area_text" name="square" id="square"/>
                        <em className="text_lbl">输入您的房屋面积</em>
                        <em className="unit" style={{color: 'black'}}>m²</em>
                      </div>
                      <p className="text_area">* 输入面积小于30㎡时，报价结果按30㎡计算</p>
                    </div>
                  </div>
                  <div className="form_line">
                    <label htmlFor="" className="label"><em className="label_start">*</em>房屋类型：</label>
                    <div className="element">
                      <div className="houseType">
                        <input type="radio" name="house" value="newHouse" id="newHouse" checked=""/><label
                      >新房</label>
                        <input type="radio" name="house" value="usedHouse" id="usedHouse"/><label
                      >二手房</label>
                      </div>
                    </div>
                  </div>

                  <div className="form_line">
                    <label htmlFor="" className="label"><em className="label_start">*</em>房屋户型：</label>
                    <div className="element">
                      <div className="huxing_wrap">
                        <div className="huxing_show">
                          <span>1室</span>
                          <span>1厅</span>
                          <span>1厨</span>
                          <span>1卫</span>
                          <span>1阳台</span>
                        </div>
                        <ul className="huxing clear">
                          <li>
                            <a className="active">1室</a>
                            <a>2室</a>
                            <a>3室</a>
                            <a>4室</a>
                            <a>5室</a>
                            <a>6室</a>
                          </li>
                          <li>
                            <a className="active">1厅</a>
                            <a>2厅</a>
                            <a>3厅</a>
                            <a>4厅</a>
                            <a>5厅</a>
                            <a>6厅</a>
                          </li>
                          <li>
                            <a className="active">1厨</a>
                            <a>2厨</a>
                            <a>3厨</a>
                            <a>4厨</a>
                            <a>5厨</a>
                            <a>6厨</a>
                          </li>
                          <li>
                            <a className="active">1卫</a>
                            <a>2卫</a>
                            <a>3卫</a>
                            <a>4卫</a>
                            <a>5卫</a>
                            <a>6卫</a>
                          </li>
                          <li>
                            <a className="active">1阳台</a>
                            <a>2阳台</a>
                            <a>3阳台</a>
                            <a>4阳台</a>
                            <a>5阳台</a>
                            <a>6阳台</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="form_line" id="phoneInput">
                    <label htmlFor="" className="label"><em className="label_start">*</em>手机号码：</label>
                    <div className="element">
                      <ul className="choosebjway clear">
                        <li className="blueradio">
                          <p><em/>手机报价</p>
                        </li>
                        <li>
                          <p><em/>微信人工报价</p>
                        </li>
                      </ul>
                      <div className="text_wrap">
                        <input type="text" className="text" name="phone"/>
                        <em className="text_lbl">报价结果将发送到您的手机</em>
                      </div>
                      <div className="suspend-wechat clear">
                        <p className="sus-head">微信加好友 获取详细报价</p>
                        <div className="sus-headimg">
                          <div className="headdetail"/>
                          <div className="worddetail"><p>装修顾问-馨馨</p></div>
                          <p>4年行业经验，24h可咨询</p>
                          <em className="pre-fruit-show-arrow" style={{left: '184.1px'}}/>
                        </div>
                        <div className="sus-quocode">
                          <div/>
                          <p>10秒闪电通过好友</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form_line">
                    <label htmlFor="" className="label"/>
                    <div className="element">
                      <p className="tip">为了您的权益，您的隐私将被严格保密。</p>
                    </div>
                  </div>
                  <div className="form_line bj_btn">
                    <i className="ico-line-btn"/>
                    <a className="calc-btn" id="calc_btn"><em>开始发布</em></a>
                    <input type="hidden" name="ptag" id="myPtag" value="1_4_7_1" className="expose-stream"
                           data-expose="true"/>
                    <span className="circle-animate"/>
                  </div>
                </div>
              </form>
            </div>
            <div className="result-wechat-hotad">
              <h3 className="calputer_tit">装修计算器<span>今天已有 <em className="num_man">1878</em> 位业主获取了装修预算</span></h3>
              <div className="wechat-img"/>
              <p className="wechat-message">报价短信已发送到您的手机</p>
              <p className="wechat-text">因材料品牌及工程量不同，具体报价以量房实测为准</p>
              <p className="wechat-recall">稍候装修管家将回电您，免费提供装修咨询服务</p>
              <div className="form_line bj_btn">
                <a className="calc-btn" id="result_hotad_calc"/>
              </div>
            </div>
            <div className="con_bj_cal col_l tender-pop-left tender-video" id="tender-video-view">
              <h6 className="tender-video-title">暖暖的家，土巴兔如何帮你实现？</h6>
              <div className="tender-video-wrapper">
                <div id="container"/>
                <p className="note"/>
                <img className="tender-video-wrapper-hand" id="tender-video-wrapper-hand"
                     src="http://img.to8to.com/to8to_img/zxbj/mousehand.png"/>
              </div>
              <div className="tender-video-tip">
                <p>已累计服务<span className="tender-video-num">1600万</span>业主</p>
                <p>服务已覆盖<span className="tender-video-num">250个</span>城市</p>
                <p><span className="tender-video-num">98万</span>入驻设计师、<span className="tender-video-num">7万</span>入驻装修公司
                </p>
              </div>
              <div className="form_line bj_btn">
                <a className="calc-btn recalc tender-video-view" id="priceBtnVideo"/>
              </div>
            </div>
            <div className="con_bj_res col_r">
              <div className="bj_res_con">
                <div className="bj_res_t clear"><span className="bj_res_t_w">您家的装修预算</span><b
                  id="bprice">178800</b><span className="bj_res_t_y">元</span></div>
                <ul className="bj_res_ul">
                  <li className="clear hotad-cl"><span>材料费：</span><strong id="materialPay"><em>76512</em>元</strong>
                  </li>
                  <li className="clear hotad-rg"><span>人工费：</span><strong id="artificialPay"><em>92634</em>元</strong>
                  </li>
                  <li className="clear hotad-sj"><span>设计费：</span><strong id="designPay"><em>5193</em>元</strong></li>
                  <li className="clear hotad-zj"><span>质检费：</span><strong id="qualityPay"><em>4461</em>元</strong></li>
                </ul>
                <div className="tip">
                  <p>装修预算数据由土巴兔历史服务上千万业主装修数据、各大城市装修公司合同数据经过大数据时时分析计算。</p>
                </div>
                <div className="hotad_bj_explain">
                  <p>稍候装修管家将回电您，免费提供装修咨询服务</p>
                  <p>因材料品牌及工程量不同，具体报价以量房实测为准</p>
                </div>
                <div className="bj-res-hotad">
                  <a href="">
                    <img src="http://www.to8to.com/" alt=""/>
                  </a>
                  <p>广告</p>
                </div>
              </div>
              <div className="bj_explain" style={{display: 'none'}}>
                <p className="attention holiday-text"><b>*</b><em className="new-bj-text">稍候装修管家将回电您，免费提供装修咨询服务</em>
                </p>
                <p><b>*</b>因材料品牌及工程量不同，具体报价以量房实测为准</p>
              </div>
              <div className="zxbj-weixin2-consult">
                <p className="zxbj-weixin2-point">报价短信已发送到您的手机</p>
                <p className="attention2 holiday-text"><b>*</b>稍后装修管家将回电您，免费提供装修咨询服务</p>
                <div className="zxbj-weixin2-fruit-box">
                  <div className="weixin2-fruit-bg"/>
                  <p className="weixin2-fruit-title1">装修怕上当？问问靠谱的人</p>
                  <div className="weixin2-fruit-show">
                    <div className="fruit-show-left">
                      <div className="fruit-show-portrait"/>
                      <p className="fruit-show-p1"><span className="fruit-show-p1-city">装修顾问 </span><span
                        className="fruit-show-p1-name">土巴兔-蓉蓉</span></p>
                      <p className="fruit-show-p2">（四年装修行业经验）</p>
                      <em className="fruit-show-arrow" style={{left: '94.8005px'}}/>
                    </div>
                    <div className="fruit-show-right">
                      <div className="fruit-show-code"/>
                      <div className="zxbj-show-code1">
                        <img src="http://www.to8to.com/"/>
                      </div>
                      <p className="fruit-show-p3">扫码, 加微信好友<em className="zxbj-wx-icon"/></p>
                    </div>
                  </div>
                  <p className="weixin2-fruit-title2"><span
                    className="fruit-title2-fff000">24小时咨询</span>任何装修疑问，更有<span
                    className="fruit-title2-b">10000套</span>精品装修案例</p>
                </div>
                <div className="bj-res-hotad">
                  <a href="">
                    <img src="http://www.to8to.com/" alt=""/>
                  </a>
                  <p>广告</p>
                </div>
              </div>
            </div>
            <div className="con_check_info">
              <h3>完善以下信息<span>&nbsp;&nbsp;&nbsp;让我们更了解您的需求优先为您服务</span></h3>
              <div className="house-type clear">
                <p className="check_question">1.&nbsp;您家的房屋现状是 :</p>
                <div className="check-house" data-ptag="0">
                  <div/>
                  <p><i/>毛坯房</p>
                  <input type="hidden" value="毛坯房"/>
                </div>
                <div className="check-house" data-ptag="1">
                  <div className="old-house"/>
                  <p><i/>旧房翻新</p>
                  <input type="hidden" value="旧房翻新"/>
                </div>
                <div className="check-house check-house-last" data-ptag="2">
                  <div className="little-change"/>
                  <p><i/>局部改造</p>
                  <input type="hidden" value="局部改造"/>
                </div>
              </div>
              <div className="decorate-time clear">
                <p className="check_question">2.&nbsp;您家准备什么时候开始装修 :</p>
                <div className="check-time" data-ptag="4">
                  <p><i/>一个月内</p>
                  <input type="hidden" value="1个月内"/>
                </div>
                <div className="check-time check-time-next" data-ptag="5">
                  <p><i/>两个月内</p>
                  <input type="hidden" value="2个月内"/>
                </div>
                <div className="check-time check-time-next" data-ptag="6">
                  <p><i/>两个月以上</p>
                  <input type="hidden" value="2个月以上"/>
                </div>
              </div>
              <div className="plot-name clear">
                <p className="check_question">3.&nbsp;您家小区名称 :&nbsp;&nbsp;</p>
                <input type="text" placeholder="土巴兔将为您推荐优质施工方" maxLength="24"/>
              </div>
              <a href="" className="check-upload">提交</a>
              <div className="complate-form">
                <p>请选择您家的装修时间</p>
              </div>
            </div>
          </div>
        </div>
        <div className="check_global_succ">
          <div className="check_grey_layer"/>
          <div className="check_pop_tip">
            <div className="check_pop_img"/>
            <p className="check_pop_text">提交成功</p>
            <p className="check_pop_recall">稍后装修管家将以<span>0755</span>开头的号码</p>
            <p className="check_pop_recall">与您联系,请注意接听。</p>
            <a href="" className="close_check_pop">知道了</a>
          </div>
        </div>
        <div id="small_window"/>
        <div className="footer" id="footerHeight">
          <div className="footer_bottom">
            <div className="footer_bottom_container">
              <div className="fbc_menu">
                <ul>
                  <li>
                    <a href="http://www.to8to.com/about/index.html" target="_blank" rel="nofollow">关于我们</a>
                    <span/>
                  </li>
                  <li>
                    <a href="http://www.to8to.com/about/contact.html" target="_blank"
                       rel="nofollow">联系我们</a>
                    <span/>
                  </li>
                  <li>
                    <a href="http://www.to8to.com/about/meiti_bd.php" target="_blank"
                       rel="nofollow">媒体报道</a>
                    <span/>
                  </li>
                  <li>
                    <a href="http://www.to8to.com/help" target="_blank" rel="nofollow">帮助中心</a>
                    <span/>
                  </li>
                  <li>
                    <a href="http://www.to8to.com/about/feedback.php" target="_blank"
                       rel="nofollow">意见反馈</a>
                    <span/>
                  </li>
                  <li>
                    <a href="http://www.to8to.com/about/recruiter.php" target="_blank"
                       rel="nofollow">高薪聘请</a>
                    <span/>
                  </li>
                  <li>
                    <a href="http://hr.to8to.com/xyzp" target="_blank" rel="nofollow">校园招聘</a>
                    <span/>
                  </li>
                  <li>
                    <a href="http://www.to8to.com/about/law.html" target="_blank" rel="nofollow">法律声明</a>
                  </li>
                </ul>

              </div>
              <div className="fbc_copyright">免责声明：本网站部分内容由用户自行上传，如权利人发现存在误传其作品情形，请及时与本站联系。</div>
              <div className="fbc_copyright">© 2017 Tubatu.com 土巴兔装修网和设计师社区 保留所有权利</div>
              <div className="fbc_icp">中国装修网
                <a href="http://www.miitbeian.gov.cn/" target="_blank" rel="nofollow">粤ICP备08125558号</a>
              </div>
              <div className="fbc_icpico">
                <a href="http://szcert.ebs.org.cn/d6c3aa01-b00f-4d32-aef4-70ad63021bab" target="_blank"
                   title="深圳市" alt="深圳市" rel="nofollow">
                  <span className="fbc_ico1"/>
                </a>
                <a href="http://www.sznet110.gov.cn/netalarm/index.jsp" target="_blank" rel="nofollow">
                  <span className="fbc_ico2"/>
                </a>
                <a href="http://www.sznet110.gov.cn/webrecord/innernet/Welcome.jsp?bano=4403101010155" target="_blank"
                   rel="nofollow">
                  <span className="fbc_ico3"/>
                </a>
                <a href="https://search.szfw.org/cert/l/CX20140929005207005275" target="_blank" rel="nofollow"><span
                  className="fbc_ico4"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
      ;
  }
}

const mapState = (state) => {
  return {value: state};
};

export default connect(mapState, (dispatch) => bindActionCreators(actionCreators, dispatch))(release);
