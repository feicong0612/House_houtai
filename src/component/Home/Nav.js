import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionCreators} from '../../actions/actions';
import {debug} from 'debug';
import {Link} from 'react-router-dom';

class Nav extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="f-h-head">
        <div className="f-h-head-content f-w1190">
          <div className="f-h-logo-nav f-clear">
            <div className="logo f-fl">
              <span className="cz-title">常州房产</span>
            </div>
            <div className="f-h-nav">
              <ul className="nav f-clear">
                <li>
                  <a className="on" href="#" title="租房" target="_blank">租房</a>
                </li>
                <li>
                  <a className="" href="#" title="新房" target="_blank">买房</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="f-h-edit-content">
          <div className="f-h-search-edit f-clear">
            <div className="logo f-fl">
              <a href="http://nc.ganji.com/fang/">
                <img className="icon"
                     src="http://sta.ganjistatic1.com/src/app/ms_v2/housing_v2/html/images/logo.png"
                     title="赶集房产" alt="赶集房产"/>
              </a>
            </div>
            <div className="f-h-search f-clear f-fl" id="listSearch">
              <form action="" method="post">
                <div className="category f-fl" style={{position: 'relative'}}>
                  <p className="title js-text">出租房</p>
                  <i className="triangle"/>
                  <ul className="list">
                    <li rel="nofollow" className="item">
                      <a href="#" title="合租房">合租房</a></li>
                    <li rel="nofollow" className="item">
                      <a href="#" title="合租房">二手房</a></li>
                    <li rel="nofollow" className="item">
                      <a href="#" title="合租房">新房</a></li>
                  </ul>
                </div>

                <div className="search f-fl">
                  <input className="search-input-fang" name="search_keyword" value=""
                         id="search_keyword" data-role="input" type="text" placeholder="开始找房"/>
                </div>
                <input data-role="btn" name="search" id="search_button"
                       type="submit" className="search-button f-fl" value="搜索"/>
              </form>
              <div className="gj_sys_autoc_rs"/>
            </div>
            <div className="f-h-edit f-fr">
              <ul className="list f-clear">
                <li className="item pub f-fl">
                  <Link to="/release">免费发布信息</Link>
                </li>
                {/*<li className="item del f-fl">*/}
                  {/*<a rel="nofollow" target="_blank"*/}
                     {/*href="">修改/删除</a></li>*/}
              </ul>
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

export default connect(mapState, (dispatch) => bindActionCreators(actionCreators, dispatch))(Nav);
