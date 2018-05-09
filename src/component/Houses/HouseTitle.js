import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionCreators} from '../../actions/actions';
import {debug} from 'debug';

class houseTitle extends Component {
  constructor(props) {
    super();
    this.queryHouse = this.queryHouse.bind(this);
    this.setCondition = this.setCondition.bind(this);
  }

  queryHouse() {
    this.props.queryHouses(this.props.value.currentHouseConditions);
    let condition = this.props.value.currentHouseConditions;
    condition['pageSize'] = 'all';
    this.props.queryAllHouses(condition);
  }

  setCondition(e) {
    let tar = e.target;
    let condition = this.props.value.currentHouseConditions;
    delete condition['currentPage'];
    if (tar.value === '') {
      delete condition[tar.name];
    }
    else {
      condition[tar.name] = tar.value;
    }
    this.props.houseConditions(condition).then(
      console.log(this.props.value.currentHouseConditions)
    );
  }

  render() {
    return (
      <div className="ui_text_indent">
        <div id="box_border">
          <div id="box_top">搜索</div>
          <div id="box_center">
            位置
            <select name="location" id="fyXq" className="ui_select01"
                    onChange={e => {
                      this.setCondition(e);
                    }}>
              <option value="">--请选择--</option>
              <option value="新北区">新北区</option>
              <option value="武进区">武进区</option>
              <option value="天宁区">天宁区</option>
              <option value="钟楼区">钟楼区</option>
              <option value="溧阳市">溧阳市</option>
            </select>
            方式
            <select name="way" id="fyDh" className="ui_select01"
                    onChange={e => {
                      this.setCondition(e);
                    }}>
              <option value="">--请选择--</option>
              <option value="整租">整租</option>
              <option value="合租">合租</option>
              <option value="购买">购买</option>
            </select>
            房型
            <select name="type" id="fyHx" className="ui_select01"
                    onChange={e => {
                      this.setCondition(e);
                    }}>
              <option value="">--请选择--</option>
              <option value="1室">一室</option>
              <option value="2室">两室</option>
              <option value="3室">三室</option>
              <option value="4室">四室</option>
              <option value="5室">五室</option>
              <option value="5室以上">五室以上</option>
            </select>
            类型
            <select name="room" id="fyStatus" className="ui_select01"
                    onChange={e => {
                      this.setCondition(e);
                    }}>
              <option value="">--请选择--</option>
              <option value="普通住宅">普通住宅</option>
              <option value="平房">平房</option>
              <option value="别墅">别墅</option>
              <option value="公寓">公寓</option>
            </select>
            朝向
            <select name="toward" id="fyStatus" className="ui_select01"
                    onChange={e => {
                      this.setCondition(e);
                    }}>
              <option value="">--请选择--</option>
              <option value="东">东</option>
              <option value="南">南</option>
              <option value="西">西</option>
              <option value="北">北</option>
            </select>
          </div>
          <div id="box_bottom">
            <input type="button" value="查询" className="ui_input_btn01"
                   onClick={() => {
                     this.queryHouse();
                     this.props.setUserPage(1);
                   }}
            />
            <input type="button" value="新增" className="ui_input_btn01" id="addBtn"
                   onClick={() => {
                     this.props.showInsertHouse(true);
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
