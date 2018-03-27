import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionCreators} from '../../actions/actions';
import {debug} from 'debug';

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
              <a href="http://nc.ganji.com/fang/">
                <img className="icon"
                     src="http://sta.ganjistatic1.com/src/app/ms_v2/housing_v2/html/images/logo.png"
                     title="赶集房产" alt="赶集房产"/>
              </a>
            </div>
            <div className="f-h-nav">
              <ul className="nav f-clear">
                <li><a className="on" href="http://nc.ganji.com/fang1/" title="租房" target="_blank">租房</a></li>
                <li><a className="" href="http://nc.ganji.com/fang5/" title="二手房"
                       target="_blank">二手房</a></li>
                <li><a className="" href="http://nc.ganji.com/fang12/" title="新房"
                       target="_blank">新房</a></li>
                <li><a className="" href="http://nc.ganji.com/fang6/" title="商铺"
                       target="_blank">商铺</a></li>
                <li><a href="http://nc.ganji.com/fang8/" title="写字楼"
                       target="_blank">写字楼</a></li>
                <li><a className="" href="http://nc.ganji.com/fang11/h0" title="厂房"
                       target="_blank">厂房</a></li>
                <li><a className="" href="http://nc.ganji.com/fang11/h1" title="仓库"
                       target="_blank">仓库</a></li>
                <li><a className="" href="http://nc.ganji.com/fang11/h3" title="土地"
                       target="_blank">土地</a></li>
                <li><a className="" href="http://nc.ganji.com/fang11/h2" title="车位"
                       target="_blank">车位</a></li>
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
            <div className="f-h-search f-clear f-fl"
                 data-widget="app/ms_v2/widget/key_search_with_local_storage_v2.js" id="listSearch" data-is-list="1"
                 data-focus-classname="small-focus" data-url-template="http://bj.ganji.com/%s/_{{keyword}}/"
            >
              <form action="" method="post">
                <div className="category f-fl" style={{position: 'relative'}}
                     data-default-url="http://nc.ganji.com/fang1/_{{keyword}}/" data-cate="fang1"
                     data-role="selected">
                  <p className="title js-text">出租房</p>
                  <i className="triangle"/>
                  <ul className="list" data-role="options">
                    <li rel="nofollow" data-role="option" data-default-url="http://nc.ganji.com/fang3/_{{keyword}}/"
                        data-cate="fang3" data-target="_blank" data-is-sub-cate="true" className="item"><a
                      rel="nofollow" href="#" title="合租房">合租房</a></li>
                    <li rel="nofollow" data-role="option" data-default-url="http://nc.ganji.com/fang5/_{{keyword}}/"
                        data-cate="fang5" data-target="_blank" data-is-sub-cate="true" className="item"><a
                      rel="nofollow" href="#" title="二手房">二手房</a></li>
                    <li rel="nofollow" data-role="option" data-default-url="http://nc.ganji.com/fang12/_{{keyword}}/"
                        data-cate="fang12" data-target="_blank" data-is-sub-cate="true" className="item"><a
                      rel="nofollow" href="#" title="新房">新房</a></li>
                    <li rel="nofollow" data-role="option" data-default-url="http://nc.ganji.com/fang10/_{{keyword}}/"
                        data-cate="fang10" data-target="_blank" data-is-sub-cate="true" className="item"><a
                      rel="nofollow" href="#" title="短租">短租</a></li>
                    <li rel="nofollow" data-role="option" data-default-url="http://nc.ganji.com/fang6/_{{keyword}}/"
                        data-cate="fang6" data-target="_blank" data-is-sub-cate="true" className="item"><a
                      rel="nofollow" href="#" title="商铺">商铺</a></li>
                    <li rel="nofollow" data-role="option" data-default-url="http://nc.ganji.com/fang8/_{{keyword}}/"
                        data-cate="fang8" data-target="_blank" data-is-sub-cate="true" className="item"><a
                      rel="nofollow" href="#" title="写字楼">写字楼</a></li>
                    <li rel="nofollow" data-role="option" data-default-url="http://nc.ganji.com/fang11/_{{keyword}}/"
                        data-cate="fang11" data-target="_blank" data-is-sub-cate="true" className="item"><a
                      rel="nofollow" href="#" title="厂房">厂房</a></li>
                    <li rel="nofollow" data-role="option" data-default-url="http://nc.ganji.com/xiaoqu/_{{keyword}}/"
                        data-cate="xiaoqu" data-target="_blank" data-is-sub-cate="true" className="item"><a
                      rel="nofollow" href="#" title="小区">小区</a></li>
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
                  <a rel="nofollow" title="免费发布信息"
                     target="_blank"
                     href="">免费发布信息</a>
                </li>
                <li className="item del f-fl">
                  <a rel="nofollow" target="_blank"
                     href="http://nc.ganji.com/site/u/">修改/删除</a></li>
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
