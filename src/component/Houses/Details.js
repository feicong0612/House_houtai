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
    let house = this.props.value.house[this.props.value.details];
    return (
      <div className="details-bg">
        <div style={{paddingTop: '100px'}}/>
        <div className="f-card  f-w1190 f-clear f-b30">
          <div className="card-img f-fl js-basic-imgs-big basic-imgs">
            <div>
              <div className="big-img">
                <span className="ui-slide-helper"/>
                <div className="big-img-wrap">
                  <video controls="controls" className="house-details">
                    <source src="../../../public/video/001.mp4" type="video/mp4"/>
                  </video>
                </div>
              </div>
            </div>
          </div>
          <div className="card-info f-fr">
            <div className="card-top">
              <p className="card-title">
                <i>{house.title}</i>
              </p>
              <div className="modal-cover" style={{display: 'none'}}/>
              <div id="reportModal" className="report-modal" style={{display: 'none'}}>
                <div className="report-m-close"/>
              </div>
              <ul className="card-pay f-clear">
                <li className="price">
                  <span className="rmb">¥</span>
                  <span className="num">{house.rent}</span>
                  <span className="month">/月</span>
                </li>
              </ul>

              <p className="sale"/>

              <ul className="er-list f-clear">
                <li className="item f-fl">
                  <span className="t">户<i className="space"/>型：</span><span className="content">{house.room}</span>
                </li>
                <li className="item f-fl">
                  <span className="t">面<i className="space"/>积：</span><span className="content">{house.type}&nbsp;&nbsp;
                  {house.area}㎡</span>
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
                  <span className="t">装修情况：</span><span className="content">普通装修</span></li>
              </ul>

              <ul className="er-list-two f-clear">
                <li className="er-item f-fl">
                  <span className="t2">地区名称：</span>
                  <span className="content">
                    <a className="blue" href="/" target="_blank">{house.community}</a>
                  </span>
                </li>
                <li className="er-item f-fl">
                  <span className="t2">所在地址：</span>
                  <span className="content">
                    <a className="blue" href="#">{house.location}</a>
                  </span>
                </li>
              </ul>
            </div>
            <div className="card-user">
              <a className="head_wrap" target="_blank"
                 href="#">
                <img className="head" src="http://stacdn201.ganjistatic1.com/src/image/v5/detail_user_header.png"/>
              </a>
              <div className="user-info f-clear small-company">
                <div className="user-info-top">
                  <p className="name">
                    **女士/先生(个人)
                    <br/>
                    <br/>
                    {house.phone}
                  </p>
                </div>
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
