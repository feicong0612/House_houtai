import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionCreators} from '../../actions/actions';
import {Link, withRouter} from 'react-router-dom';
import {debug} from 'debug';
import swal from 'sweetalert';


class release extends Component {
  constructor(props) {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    let a = this;
    a.props.history.push('/home');
  }

  render() {
    return (
      <div className="global_wrap clear zxbj_details" id="gloWrap">
        <form action="http://127.0.0.1:3000/houseInsert" target="id_iframe" onSubmit={() => {
          swal('', '提交成功!', 'success');
        }}>
          <div className="con">
            <div className="con_bj clear">
              <div className="con_bj_cal col_l" id="tender-video-form">
                <h3 className="calputer_tit">上传开始</h3>
                <div className="none">
                  <input type="text" name="user" value={this.props.value.user[0].id}/>
                </div>
                <div className="mod_form bj_form">
                  <div className="form_line">
                    <label htmlFor="" className="label"><em className="label_start">*</em>所在地区：</label>
                    <div className="element">
                      <div className="clear">
                        <select id="User_Shen" name="location" className="select select_s col_l">
                          <option value="新北区">新北区</option>
                          <option value="武进区">武进区</option>
                          <option value="天宁区">天宁区</option>
                          <option value="钟楼区">钟楼区</option>
                          <option value="溧阳市">溧阳市</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="form_line">
                    <label htmlFor="" className="label"><em className="label_start">*</em>标题：</label>
                    <div className="element">
                      <div className="text_wrap">
                        <textarea className="text area_text" name="title" id="square"
                                  placeholder="输入您的显示标题"/>
                      </div>
                    </div>
                  </div>
                  <div className="form_line">
                    <label htmlFor="" className="label"><em className="label_start">*</em>房屋面积：</label>
                    <div className="element">
                      <div className="text_wrap">
                        <input type="text" className="text area_text" name="area" id="square"
                               placeholder="输入您的房屋面积"/>
                        <em className="unit" style={{color: 'black'}}>m²</em>
                      </div>
                    </div>
                  </div>

                  <div className="form_line">
                    <label htmlFor="" className="label"><em className="label_start">*</em>详细地址：</label>
                    <div className="element">
                      <div className="text_wrap">
                        <textarea className="text area_text" name="community" id="square"
                                  placeholder="输入您的详细地址"/>
                      </div>
                    </div>
                  </div>

                  <div className="form_line">
                    <label htmlFor="" className="label"><em className="label_start">*</em>房屋类型：</label>
                    <div className="element">
                      <div className="houseType">
                        <input type="radio" name="way"
                               value="购买" id="newHouse"
                               defaultChecked="checked"
                        />
                        <label htmlFor="newHouse">购买</label>
                        <input type="radio" name="way"
                               value="整租" id="newHouse2"
                        />
                        <label htmlFor="newHouse2">整租</label>
                        <input type="radio" name="way"
                               value="合租" id="newHouse3"
                        />
                        <label htmlFor="newHouse3">合租</label>
                      </div>
                    </div>
                  </div>

                  <div className="form_line">
                    <label htmlFor="" className="label"><em className="label_start">*</em>价格：</label>
                    <div className="element">
                      <div className="text_wrap">
                        <input type="text" className="text area_text" name="rent" id="square"
                               placeholder="输入您的房屋价格：***元"/>
                        <em className="unit" style={{color: 'black'}}>月/m²</em>
                      </div>
                    </div>
                  </div>

                  <div className="form_line">
                    <label htmlFor="" className="label"><em className="label_start">*</em>房屋户型：</label>
                    <div className="element">
                      <select id="User_Shen" name="type" className="select select_s col_l">
                        <option value="1室">1室</option>
                        <option value="2室">2室</option>
                        <option value="3室">3室</option>
                        <option value="4室">4室</option>
                        <option value="5室">5室</option>
                        <option value="5室以上">5室以上</option>
                      </select>
                    </div>
                  </div>

                  <div className="form_line">
                    <label htmlFor="" className="label"><em className="label_start">*</em>选择房型：</label>
                    <div className="element">
                      <select id="User_Shen" name="room" className="select select_s col_l">
                        <option value="普通住宅">普通住宅</option>
                        <option value="公寓">公寓</option>
                        <option value="别墅">别墅</option>
                        <option value="平房">平房</option>
                      </select>
                    </div>
                  </div>

                  <div className="form_line">
                    <label htmlFor="" className="label"><em className="label_start">*</em>房屋朝向：</label>
                    <div className="element">
                      <select id="User_Shen" name="towards" className="select select_s col_l">
                        <option value="东">东</option>
                        <option value="南">南</option>
                        <option value="西">西</option>
                        <option value="北">北</option>
                      </select>
                    </div>
                  </div>

                  <div className="form_line" id="phoneInput">
                    <label htmlFor="" className="label"><em className="label_start">*</em>手机号码：</label>
                    <div className="element">
                      <div className="text_wrap">
                        <input type="text" className="text" name="phone" placeholder="请填写你的手机号码"/>
                      </div>
                    </div>
                  </div>
                  <div className="form_line">
                    <div className="element">
                      <p className="tip">为了您的权益，您的隐私将被严格保密。</p>
                    </div>
                  </div>
                  <div className="form_line bj_btn">
                    <i className="ico-line-btn"/>
                    <input type="submit" className="calc-btn" id="calc_btn" value="开始上传"
                    />
                    <span className="circle-animate"/>
                  </div>
                </div>
              </div>
              <div className="con_bj_res col_r">
                <div className="bj_res_con">
                  <div className="bj_res_t clear">
                    <span className="bj_res_t_w">您家的实景视频</span>
                    <div className="house-video">
                      <input type="file" name="video"/>
                    </div>
                  </div>
                  <div className="tip">
                    <p>房屋数据由我们服务上千万业主数据、各大城市公司合同数据经过大数据时时分析计算。</p>
                  </div>
                  <div className="bj-res-hotad">
                    <a href="">
                      <img src="http://www.to8to.com/" alt=""/>
                    </a>
                    <p>广告</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <iframe id="id_iframe" name="id_iframe" style={{display: 'none'}}/>
        <div id="small_window"/>
        <div className="footer" id="footerHeight">
          <div className="footer_bottom">
            <div className="footer_bottom_container">
              <div className="fbc_menu">
                <ul>
                  <li>
                    <a href="#" target="_blank" rel="nofollow">关于我们</a>
                    <span/>
                  </li>
                  <li>
                    <a href="#" target="_blank"
                       rel="nofollow">联系我们</a>
                    <span/>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="nofollow">帮助中心</a>
                    <span/>
                  </li>
                  <li>
                    <a href="#" target="_blank"
                       rel="nofollow">意见反馈</a>
                    <span/>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="nofollow">法律声明</a>
                  </li>
                </ul>
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
