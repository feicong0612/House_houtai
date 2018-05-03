import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionCreators} from '../../actions/actions';
import {debug} from 'debug';

class brumb extends Component {
  constructor(props) {
    super();
    this.state = {
      left: 0,
      right: 10000,
    };
    this.setRent = this.setRent.bind(this);
    this.conditions = this.conditions.bind(this);
    this.setCondition = this.setCondition.bind(this);
  }

  setRent(type, value) {
    console.log(type, value);
    if (type === 'left') {
      this.setState({
        left: parseInt(value)
      });
    }
    else if (type === 'right') {
      this.setState({
        right: parseInt(value)
      });
    }
  }

  conditions() {
    let condition = this.state;
    delete condition.left;
    delete condition.right;
    //console.log(condition);
    return condition;
  }

  setCondition(type, item) {
    //console.log(type, item);
    if (item === '不限') {
      this.setState({
        [type]: 'all'
      }, () => {
        console.log('条件：', this.conditions());
        let conditions = this.conditions();
        this.props.queryHouses(conditions);
        this.props.conditions(conditions);
        conditions['pageSize'] = 'all';
        this.props.queryAllHouses(conditions);
      });
    }
    else {
      this.setState({
        [type]: item
      }, () => {
        console.log('条件：', this.state);
        this.props.queryHouses(this.conditions());
        let conditions = this.conditions();
        this.props.queryHouses(conditions);
        this.props.conditions(conditions);
        conditions['pageSize'] = 'all';
        this.props.queryAllHouses(conditions);
      });
    }
  }

  render() {
    return (
      <div>
        <div className="f-filter f-w1190">
          <div id="gj_brand_list_banner">
            <div id="22"/>
          </div>
          <div className="f-f-content" style={{marginTop: 0}}>
            <dl className="fir-item f-clear">
              <dt className="title">位置：</dt>
              <dd className="info f-clear">
                {this.props.value.conditions.location.map((item, index) => {
                  return (
                    <a key={index}
                       className={this.props.value.open.location === index ? 'option current' : 'option'}
                       href="#"
                       onClick={e => {
                         e.preventDefault();
                         this.props.setCondition('location', index);
                         if (index === 0) {
                           this.setCondition('location', item);
                         }
                         else {
                           this.setCondition('location', item);
                         }
                       }}
                    >{item}</a>
                  );
                })}
              </dd>
            </dl>
            <dl className="fir-item f-clear">
              <dt className="title">方式：</dt>
              <dd className="info f-clear">
                {this.props.value.conditions.way.map((item, index) => {
                  return (
                    <a key={index}
                       className={this.props.value.open.way === index ? 'option current' : 'option'}
                       href="#"
                       onClick={e => {
                         e.preventDefault();
                         this.props.setCondition('way', index);
                         if (index === 0) {
                           this.setCondition('way', item);
                         }
                         else {
                           this.setCondition('way', item);
                         }
                       }}
                    >{item}</a>
                  );
                })}
              </dd>
            </dl>

            <dl className="fir-item f-clear">
              <dt className="title">租金：</dt>
              <dd className="info f-clear">
                {this.props.value.conditions.rent.map((item, index) => {
                  if (index === 0) {
                    return (
                      <a key={index}
                         className={this.props.value.open.rent === index ? 'option current' : 'option'}
                         href="#"
                         onClick={e => {
                           e.preventDefault();
                           this.props.setCondition('rent', '不限');
                         }}
                      >{item}</a>);
                  }
                  else {
                    return (
                      <a key={index}
                         className={this.props.value.open.rent === index ? 'option current' : 'option'}
                         href="#"
                         onClick={e => {
                           e.preventDefault();
                           this.props.setCondition('rent', index);
                           if (index === 0) {
                             this.setCondition('rent', [item[0], item[1]]);
                           }
                           else {
                             this.setCondition('rent', [item[0], item[1]]);
                           }
                         }}
                      >{item[0]}-{item[1]}元</a>
                    );
                  }
                })}
                <span className="input-box clearfix">
                  <input className="price-input js-begin"
                         type="text"
                         name="left"
                         id="my_price_b"
                         onChange={e => {
                           this.setRent(e.target.name, e.target.value);
                         }}
                  />
                  <span className="line">-</span>
                  <input className="price-input js-end"
                         type="text"
                         name="right"
                         id="my_price_e"
                         onChange={e => {
                           this.setRent(e.target.name, e.target.value);
                         }}/>
                  <span className="unit">元</span>
                  <a className="price-done js-btn" href="#" id="my_price_btn"
                     onClick={e => {
                       e.preventDefault();
                       this.setCondition('rent', [this.state.left, this.state.right]);
                     }}
                  >确定</a>
                </span>
              </dd>
            </dl>
            <dl className="fir-item f-clear">
              <dt className="title">房型：</dt>
              <dd className="info f-clear">
                {this.props.value.conditions.type.map((item, index) => {
                  return (
                    <a key={index}
                       className={this.props.value.open.type === index ? 'option current' : 'option'}
                       href="#"
                       onClick={e => {
                         e.preventDefault();
                         this.props.setCondition('type', index);
                         if (index === 0) {
                           this.setCondition('type', item);
                         }
                         else {
                           this.setCondition('type', item);
                         }
                       }}
                    >{item}</a>
                  );
                })}
              </dd>
            </dl>
            <dl className="fir-item f-clear">
              <dt className="title">类型：</dt>
              <dd className="info f-clear">
                {this.props.value.conditions.room.map((item, index) => {
                  return (
                    <a key={index}
                       className={this.props.value.open.room === index ? 'option current' : 'option'}
                       href="#"
                       onClick={e => {
                         e.preventDefault();
                         this.props.setCondition('room', index);
                         if (index === 0) {
                           this.setCondition('room', item);
                         }
                         else {
                           this.setCondition('room', item);
                         }
                       }}
                    >{item}</a>
                  );
                })}
              </dd>
            </dl>
            <dl className="fir-item f-clear">
              <dt className="title">朝向：</dt>
              <dd className="info f-clear">
                {this.props.value.conditions.toward.map((item, index) => {
                  return (
                    <a key={index}
                       className={this.props.value.open.toward === index ? 'option current' : 'option'}
                       href="#"
                       onClick={e => {
                         e.preventDefault();
                         this.props.setCondition('toward', index);
                         if (index === 0) {
                           this.setCondition('toward', item);
                         }
                         else {
                           this.setCondition('toward', item);
                         }
                       }}
                    >{item}</a>
                  );
                })}
              </dd>
            </dl>
          </div>
          <div className="division"/>
        </div>
      </div>
    );
  }
}

const
  mapState = (state) => {
    return {value: state};
  };

export default connect(mapState,

  (dispatch) =>

    bindActionCreators(actionCreators, dispatch)
)(
  brumb
)
;
