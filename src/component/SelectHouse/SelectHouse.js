import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionCreators} from '../../actions/actions';
import {debug} from 'debug';

class brumb extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <div className="f-filter f-w1190">
          <div id="gj_brand_list_banner">
            <div id="22" name="赶集列表页顶通"/>
          </div>
          <div className="f-f-content" style={{marginTop: 0}}>
            <dl className="fir-item fang5-area f-clear ">
              <dt className="title">位置：</dt>
              <dd className="info">
                <ul className="sec-list f-clear">
                  <li className="sec-item current">
                    <a href="/">区域 <i className="icon"/>
                    </a>
                  </li>
                  <li className="sec-item">
                    <a href="/">地铁 <i className="icon"/>
                    </a>
                  </li>
                  <li className="sec-item">
                    <a href="/" style={{width: '70px'}}>小区信息</a>
                  </li>
                  <li className="sec-item">
                    <a href="/" style={{width: '70px'}}>找经纪人</a>
                  </li>
                </ul>
                <div className="thr-list">
                  <ul className="f-clear">
                    <li className="item"><a href="/" title="不限">不限</a></li>
                    <li className="item"><a href="/">东湖</a></li>
                    <li className="item"><a href="/">西湖</a></li>
                    <li className="item"><a href="/">青云谱</a></li>
                    <li className="item"><a href="/">青山湖</a></li>
                    <li className="item"><a href="/">高新区</a></li>
                    <li className="item"><a href="/">红谷滩新区</a></li>
                    <li className="item"><a href="/">昌北</a></li>
                    <li className="item"><a href="/">新建</a></li>
                    <li className="item"><a href="/">湾里</a></li>
                    <li className="item"><a href="/">南昌县</a></li>
                    <li className="item"><a href="/">进贤</a></li>
                    <li className="item current"><a href="/">安义</a></li>
                  </ul>
                  <div className="fou-list f-clear">
                    <p className="filter-all f-fl">
                      <a className=" current"
                         href="/">不限</a></p>
                    <span className="subway-item">C</span>
                    <a className="subway-item" href="/">长埠</a>
                    <span
                      className="subway-item">D</span>
                    <a className="subway-item" href="/">鼎湖</a>
                    <a className="subway-item" href="/">东阳</a>
                    <span className="subway-item">H</span>
                    <a className="subway-item" href="/">黄洲</a>
                    <span className="subway-item">L</span>
                    <a className="subway-item" href="/">龙津</a>
                    <span className="subway-item">S</span>
                    <a className="subway-item" href="/">石鼻</a>
                    <span className="subway-item">W</span>
                    <a className="subway-item" href="/">万埠</a>
                    <a className="subway-item" href="/">其他</a>
                  </div>
                </div>
              </dd>
            </dl>


            <dl className="fir-item f-clear">
              <dt className="title">方式：</dt>
              <dd className="info f-clear">
                <a className="option current" href="/">不限</a>
                <a href="/" className="option">整租</a>
                <a className="option" href="/">合租</a>
              </dd>
            </dl>

            <dl className="fir-item f-clear">
              <dt className="title">租金：</dt>
              <dd className="info f-clear">
                <a href="/" className="option current" title="不限">不限</a>
                <a className="option"
                   href="/">600元以下</a>
                <a className="option" href="/">600-1000元</a>
                <a className="option" href="/">1000-1500元</a>
                <a className="option" href="/">1500-2000元</a>
                <a className="option" href="/">2000-2500元</a> <a
                className="option" href="/">2500-3000元</a>
                <a className="option" href="/">3000-5000元</a>
                <a className="option" href="/">5000元以上</a>
                <span className="input-box clearfix"
                      data-url-template="http://nc.ganji.com/fang1/anyi/b{{begin}}e{{end}}/"
                      data-widget="app/ms_v2/housing_v2/store_list.js#priceAndAreaFilter"> public
                  <input className="price-input js-begin" type="text" name="b" id="my_price_b" value=""
                         data-default-value="0"/>
                  <span className="line">-</span>
                  <input className="price-input js-end"
                         type="text" name="e"
                         id="my_price_e" value=""
                         data-default-value="99999"/>
                  <span className="unit">元</span>
                  <a className="price-done js-btn" href="#" id="my_price_btn">确定</a>
                </span>
              </dd>
            </dl>
            <dl className="fir-item f-clear">
              <dt className="title">房型：</dt>
              <dd className="info f-clear">
                <a className="option current" href="/">不限</a>
                <a title="1室" className="option" href="/">1室</a>
                <a title="2室" className="option" href="/">2室</a>
                <a title="3室" className="option" href="/">3室</a>
                <a title="4室" className="option" href="/">4室</a>
                <a title="5室" className="option" href="/">5室</a>
                <a title="5室以上" className="option" href="/">5室以上</a>
              </dd>
            </dl>
            <dl className="fir-item f-clear">
              <dt className="title">更多：</dt>
              <dd className="info moreitem f-clear">
                <div className="mitem-category f-fl">
                  <div data-widget="app/ms_v2/common/base_page.js#hoverWidget" className="moreitem-box clearfix">
                    <div className="moreitem-btn"><a href="#">房屋类型</a></div>
                    <ul className="moreitem-opts">
                      <li><a href="/">不限</a></li>
                      <li><a href="/">普通住宅</a></li>
                      <li><a href="/">公寓</a></li>
                      <li><a href="/">别墅</a></li>
                      <li><a href="/">平房</a></li>
                      <li><a href="/">酒店公寓</a></li>
                      <li><a href="/">商住两用</a></li>
                      <li><a href="/">其他</a></li>
                    </ul>
                  </div>
                </div>
                <div className="mitem-category f-fl">
                  <div data-widget="app/ms_v2/common/base_page.js#hoverWidget" className="moreitem-box clearfix">
                    <div className="moreitem-btn"><a href="#">朝向</a></div>
                    <ul className="moreitem-opts">
                      <li><a href="/">不限</a></li>

                      <li><a href="/">东</a></li>

                      <li><a href="/">南</a></li>

                      <li><a href="/">西</a></li>

                      <li><a href="/">北</a></li>

                      <li><a href="/">南北</a></li>

                      <li><a href="/">东西</a></li>

                    </ul>
                  </div>
                </div>
                <div className="other f-fl">
                  <a href="/">精装修</a>
                  <a href="/">新上房源</a>
                  <a href="/">有电梯</a>
                  <a href="/">押一付一</a>
                </div>
              </dd>
            </dl>
          </div>
          <div className="division"/>
          <div className="f-f-content f-filter-custom">
            <dl className="fir-item f-custom-list f-clear">
              <dt className="title">筛选：</dt>
              <dd className="info f-clear">
                <a href="/" className="filter-opts"><span className="filter-opt">安义</span><span
                  className="filter-close"/></a>
                <div className="filter-opts filter-clear"><a className="filter-opt"
                                                             href="http://nc.ganji.com/fang1/">清空</a></div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {value: state};
};

export default connect(mapState, (dispatch) => bindActionCreators(actionCreators, dispatch))(brumb);
