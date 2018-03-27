import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionCreators} from '../../actions/actions';
import {debug} from 'debug';

class House extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="f-list js-tips-list">
        <div className="f-list-item ershoufang-list" href="/fang1/2985449494x.htm" target="_blank" id="puid-2985449494">
          <dl className="f-list-item-wrap f-clear">
            <dt className="img">
              <div className="img-wrap">
                <a target="_blank" rel="nofollow" href="/">
                  <img title="诚心直租 拎包入住 恒茂阳光加州" alt="诚心直租 拎包入住 恒茂阳光加州" className="translation js-lazy-load js-img"
                       src="http://tct3.ganjistatic1.com/gjfsqq/69418de0b4384a8c87ed60daace7cac0_198-143c_9-0.jpg"/>
                </a>
              </div>
              <span className="num-img-wrap"/>
              <span className="num-img">6图</span>
            </dt>
            <dd className="dd-item title">
              <a href="/" title="诚心直租 拎包入住 恒茂阳光加州" className="js-title value title-font" target="_blank">诚心直租 拎包入住
                恒茂阳光加州</a>
            </dd>

            <dd className="dd-item size" data-huxing="2室1厅1卫" data-area="82㎡">
              <span className="first js-huxing">整租</span>
              <span className="item-line"/>
              <span>2室1厅1卫</span>
              <span className="item-line"/>
              <span>82㎡</span>
              <span className="item-line"/>
              <span>西向</span>
              <span className="item-line"/>
              <span>高层（共8层）</span>
              <span className="item-line"/>
              <span className="last">精装修</span>
            </dd>
            <dd className="dd-item address"><span className="area">
              <a target="_blank" className="address-eara" href="/"> 安义</a>-
              <a target="_blank" className="address-eara" href="/"> 其他租房</a>-
              <a href="/" className="address-eara" target="_blank">恒茂阳光加州</a>
            </span>
            </dd>
            <dd className="dd-item feature">
              <span className="">押一付一</span>
              <span className="">新上房源</span>
            </dd>
            <dd className="dd-item info">
              <div className="price"><span className="num">900</span><span className="yue">元/月</span></div>
              <div className="time">2小时内</div>
            </dd>
          </dl>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {value: state};
};

export default connect(mapState, (dispatch) => bindActionCreators(actionCreators, dispatch))(House);
