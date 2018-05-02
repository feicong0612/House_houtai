import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionCreators} from '../../actions/actions';
import {debug} from 'debug';
import {Link} from 'react-router-dom';

class Nav extends Component {
  constructor(props) {
    super();
    this.state = {
      title: ''
    };
    this.searchTitle = this.searchTitle.bind(this);
  }

  setTitle(value) {
    this.setState({
      title: value
    });
  }

  searchTitle() {
    //console.log('开始搜索',this.state.title);
    this.props.queryHouses({'title': this.state.title});
  }

  render() {
    return (
      <div className="f-h-head">
        <div className="f-h-head-content f-w1190">
          <div className="f-h-logo-nav f-clear">
            <div className="logo f-fl">
              <span className="cz-title">常州房产</span>
            </div>
          </div>
        </div>
        <div className="f-h-edit-content">
          <div className="f-h-search-edit f-clear">
            <div className="f-h-search f-clear f-fl" id="listSearch">
              <form action="" method="post">
                <div className="category f-fl" style={{position: 'relative'}}>
                  <p className="title js-text">搜索</p>
                </div>
                <div className="search f-fl">
                  <input className="search-input-fang" name="search_keyword"
                         id="search_keyword" type="text" placeholder="开始找房"
                         onChange={e => {
                           this.setTitle(e.target.value);
                         }}
                  />
                </div>
                <input data-role="btn" name="search" id="search_button"
                       type="button"
                       className="search-button f-fl"
                       value="搜索"
                       onClick={() => {
                         this.searchTitle();
                       }}
                />
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
