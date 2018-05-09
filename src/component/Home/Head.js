import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionCreators} from '../../actions/actions';
import {debug} from 'debug';
import {Link} from 'react-router-dom';

class Head extends Component {
  constructor(props) {
    super();
    this.show = this.show.bind(this);
  }

  show() {
    //console.log('开始查询房屋信息');
    // this.props.queryHouses();
    // this.props.queryAllHouses({pageSize: 'all'});
  }

  componentWillMount() {
    this.show();
  }

  render() {

    return (
      <div id="top">
        <div id="top_logo">
          <span width="274" height="49"
                style={{verticalAlign: 'middle', color: '#fff', fontSize: '25px'}}>
            房屋租售后台管理系统
          </span>
        </div>
        <div id="top_links">
          <div id="top_op">
            <ul>
              <li>
                <img alt="当前用户" src="/public/images/common/user.jpg"/>：
                <span>管理员</span>
              </li>
            </ul>
          </div>
          <div id="top_close">
            <a href="#" target="_parent">
              <img alt="退出系统" title="退出系统" src="/public/images/common/close.jpg"
                   style={{position: 'relative', top: '10px', left: '25px'}}/>
            </a>
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
