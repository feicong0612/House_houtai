import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionCreators} from '../../actions/actions';
import {debug} from 'debug';

class page extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="f-page">
        <div className="pageBox" data-widget="app/ms_v2/housing_v2/list.js#pageFixed" data-pagev="0">
          <div className="pageBox" data-widget="app/ms_v2/common/list_page.js#pagination">
            <ul className="pageLink clearfix">
              <li><a href="/" className="prev"><span>上一页 &gt;</span></a></li>
              <li><a className="c linkOn"><span>1</span></a></li>
              <li><a href="/"><span>2</span></a></li>
              <li><a href="/"><span>3</span></a></li>
              <li><a href="/"><span>4</span></a></li>
              <li><a href="/"><span>5</span></a></li>
              <li><a href="/"><span>6</span></a></li>
              <li><a href="/"><span>7</span></a></li>
              <li><a href="/"><span>8</span></a></li>
              <li><a href="/"><span>9</span></a></li>
              <li><a href="/"><span>10</span></a></li>
              <li><a href="/" className="next"><span>下一页 &gt;</span></a></li>
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
