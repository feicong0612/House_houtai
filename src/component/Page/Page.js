import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionCreators} from '../../actions/actions';
import {debug} from 'debug';

class page extends Component {
  constructor(props) {
    super();
    this.state = {
      currentPage: 1
    };
  }

  render() {
    let page = Math.ceil(this.props.value.allhouse.length / 5);
    let total = [];
    console.log('页数:', page);
    for (let i = 0; i < page; i++) {
      total[i] = i + 1;
    }
    return (
      <div className="f-page">
        <div className="pageBox" data-widget="app/ms_v2/housing_v2/list.js#pageFixed" data-pagev="0">
          <div className="pageBox" data-widget="app/ms_v2/common/list_page.js#pagination">
            <ul className="pageLink clearfix">
              <li><a href="/"
                     className="prev"
                     onClick={
                       e => {
                         e.preventDefault();
                         let conditions = this.props.value.currentConditions;
                         conditions['currentPage'] = this.state.currentPage - 1;
                         //console.log('当前条件', conditions);
                         console.log(this.state.currentPage);
                         if (this.state.currentPage > 1) {
                           this.setState({
                             currentPage: this.state.currentPage - 1
                           });
                           this.props.queryHouses(conditions);
                         }
                       }
                     }
              ><span>&lt;上一页 </span></a></li>
              {total.map((item, index) => {
                return (
                  <li key={index}>
                    <a className={this.state.currentPage === index + 1 ? 'currentPage' : ''}
                       href="#"
                       onClick={
                         e => {
                           e.preventDefault();
                           //console.log('当前页码', index);
                           let conditions = this.props.value.currentConditions;
                           conditions['currentPage'] = index + 1;
                           this.setState({
                             currentPage: index + 1
                           });
                           //console.log('当前条件', conditions);
                           this.props.queryHouses(conditions);
                         }
                       }
                    ><span>{item}</span></a>
                  </li>
                );
              })}
              <li><a href="/"
                     className="next"
                     onClick={
                       e => {
                         e.preventDefault();
                         let conditions = this.props.value.currentConditions;
                         conditions['currentPage'] = this.state.currentPage + 1;
                         //console.log('当前条件', conditions);
                         console.log(this.state.currentPage);
                         if (this.state.currentPage < page) {
                           this.setState({
                             currentPage: this.state.currentPage + 1
                           });
                           this.props.queryHouses(conditions);
                         }
                       }
                     }
              ><span>下一页 &gt;</span></a></li>
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

export default connect(mapState, (dispatch) => bindActionCreators(actionCreators, dispatch))(page);
