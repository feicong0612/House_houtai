import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionCreators} from '../../actions/actions';
import {debug} from 'debug';
import {Link} from 'react-router-dom';

class List extends Component {
  constructor(props) {
    super();
    this.state = {
      title: ''
    };
  }

  render() {
    return (
      <div id="side">
        <div id="left_menu_cnt">
          <div id="nav_module">
            <img src="/public/images/common/module_1.png" width="210" height="58"/>
          </div>
          <div id="nav_resource">
            <ul id="dleft_tab1" className="ztree">
              <li id="dleft_tab1_1" className="level0">
                <span id="dleft_tab1_1_switch" title="" className="button level0 switch noline_open"/>
                <a id="dleft_tab1_1_a" className="level0" target="_blank" title="基础数据">
                  <span id="dleft_tab1_1_ico" className="button ico_open"/>
                  <span id="dleft_tab1_1_span">用户信息</span></a>
                <ul id="dleft_tab1_1_ul" className="level0">
                  <li id="dleft_tab1_2" className="level1">
                    <span id="dleft_tab1_2_switch" title="" className="button level1 switch noline_docu"/>
                    <span id="dleft_tab1_2_ico" className="button ico_docu"/>
                    <span id="dleft_tab1_2_span">
                      <Link to="/home/user">用户管理</Link>
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
            <ul id="dleft_tab1" className="ztree">
              <li id="dleft_tab1_1" className="level0">
                <span id="dleft_tab1_1_switch" title="" className="button level0 switch noline_open"/>
                <a id="dleft_tab1_1_a" className="level0" target="_blank" title="基础数据">
                  <span id="dleft_tab1_1_ico" className="button ico_open"/>
                  <span id="dleft_tab1_1_span">房源信息</span></a>
                <ul id="dleft_tab1_1_ul" className="level0">
                  <li id="dleft_tab1_2" className="level1">
                    <span id="dleft_tab1_2_switch" title="" className="button level1 switch noline_docu"/>
                    <span id="dleft_tab1_2_ico" className="button ico_docu"/>
                    <span id="dleft_tab1_2_span">
                      <Link to="/home/house">房源管理</Link>
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {value: state};
};

export default connect(mapState, (dispatch) => bindActionCreators(actionCreators, dispatch))(List);
