import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionCreators} from '../../actions/actions';
import {debug} from 'debug';
import {Link, withRouter} from 'react-router-dom';

class House extends Component {
  constructor(props) {
    super();
  }

  render() {
    let house = this.props.info;
    return (
      <div className="f-list js-tips-list">
        <div className="f-list-item ershoufang-list" href="#" id="puid-2985449494">
          <dl className="f-list-item-wrap f-clear">
            <dt className="img">
              <div className="img-wrap">
                <video>
                  <source src="../../../public/video/001.mp4" type="video/mp4"/>
                </video>
              </div>
            </dt>
            <dd className="dd-item title">
              <Link
                className="js-title value title-font"
                to="/details"
                onClick={() => {
                  this.props.setDetails(this.props.idx);
                  //console.log(this.props.idx);
                }}
              >
                {house.title}
              </Link>
            </dd>

            <dd className="dd-item size">
              <span className="first js-huxing">{house.way}</span>
              <span className="item-line"/>
              <span>{house.type}</span>
              <span className="item-line"/>
              <span>{house.area}㎡</span>
              <span className="item-line"/>
              <span>{house.toward}</span>
            </dd>
            <dd className="dd-item address"><span className="area">
              {house.location}
            </span>
            </dd>
            <dd className="dd-item feature">
              <span className="">押一付一</span>
            </dd>
            <dd className="dd-item info">
              <div className="price"><span className="num">{house.rent}</span>
                <span className={house.way === '购买' ? 'none' : 'yue'}>元/月</span>
                <span className={house.way === '购买' ? 'yue' : 'none'}>元/㎡</span>
              </div>
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
