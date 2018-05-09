import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionCreators} from '../../actions/actions';
import {debug} from 'debug';

class houseTitle extends Component {
  constructor(props) {
    super();
    this.queryUser = this.queryUser.bind(this);
  }

  queryUser() {
    this.props.queryUsers(this.props.value.currentUserConditions);
    let condition = this.props.value.currentUserConditions;
    condition['pageSize'] = 'all';
    this.props.queryAllUsers(condition);
  }

  render() {
    return (
      <div className="ui_text_indent">
        <div id="box_border">
          <div id="box_top">搜索</div>
          <div id="box_center">
            用户名称&nbsp;&nbsp;
            <input type="text" id="fyZldz"
                   name="uname" className="ui_input_txt02"
                   onChange={(e) => {
                     this.props.userConditions({uname: e.target.value});
                   }}
            />
          </div>
          <div id="box_bottom">
            <input type="button" value="查询" className="ui_input_btn01"
                   onClick={() => {
                     this.queryUser();
                     this.props.setUserPage(1);
                   }}
            />
            <input type="button" value="新增" className="ui_input_btn01" id="addBtn"
                   onClick={() => {
                     this.props.showInsertUser(true);
                   }}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {value: state};
};

export default connect(mapState, (dispatch) => bindActionCreators(actionCreators, dispatch))(houseTitle);
