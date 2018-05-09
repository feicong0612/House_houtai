import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionCreators} from '../../actions/actions';
import {Link, withRouter} from 'react-router-dom';
import {debug} from 'debug';
import swal from 'sweetalert';

class house extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    this.props.queryHouses();
    this.props.queryAllHouses({pageSize: 'all'});
  }

  render() {
    return (
      <div className="ui_content">
        <div className="ui_tb">
          <table className="table" cellSpacing="0" cellPadding="0" width="100%" align="center" border="0">
            <tbody>
            <tr style={{background: 'rgb(255, 255, 255)'}}>
              <th width="30">
                <input type="checkbox" id="all"/>
              </th>
              <th>标题</th>
              <th>位置</th>
              <th>小区</th>
              <th>方式</th>
              <th>面积</th>
              <th>价格</th>
              <th>房型</th>
              <th>类型</th>
              <th>朝向</th>
              <th>操作</th>
            </tr>
            {this.props.value.house.map((item, index) => {
              return (
                <tr key={index} style={{background: 'rgb(255, 255, 255)'}}>
                  <td style={{color: 'rgb(144, 144, 144)'}}>
                    <input type="checkbox" name="IDCheck" value="14458579642011" className="acb"/>
                  </td>
                  <td style={{color: 'rgb(144, 144, 144)'}}>{item.title}</td>
                  <td style={{color: 'rgb(144, 144, 144)'}}>{item.location}</td>
                  <td style={{color: 'rgb(144, 144, 144)'}}>{item.community}</td>
                  <td style={{color: 'rgb(144, 144, 144)'}}>{item.way}</td>
                  <td style={{color: 'rgb(144, 144, 144)'}}>{item.area}</td>
                  <td style={{color: 'rgb(144, 144, 144)'}}>{item.rent}</td>
                  <td style={{color: 'rgb(144, 144, 144)'}}>{item.type}</td>
                  <td style={{color: 'rgb(144, 144, 144)'}}>{item.room}</td>
                  <td style={{color: 'rgb(144, 144, 144)'}}>{item.toward}</td>
                  <td style={{color: 'rgb(144, 144, 144)'}}>
                    <a href="#" className="edit"
                       onClick={e => {
                         e.preventDefault();
                         this.props.showEditHouse(true);
                         this.props.setHouseInfor({
                           oldTitle: item.title,
                           newTitle: item.title,
                           location: item.location,
                           community: item.community,
                           way: item.way,
                           area: item.area,
                           rent: item.rent,
                           type: item.type,
                           room: item.room,
                           toward: item.toward,
                           user: item.user,
                           video: item.video,
                           phone: item.phone,
                         });
                       }}
                    >编辑</a>
                    <span> | </span>
                    <a href="#"
                       onClick={e => {
                         e.preventDefault();
                         if (confirm('确定要删除数据吗？')) {
                           this.props.deleteHouses({title: item.title}).then(
                             data => {
                               if (data.type === 'SUCCESS') {
                                 swal('', '删除成功!', 'success');
                               }
                             }
                           );
                         }
                       }}>删除</a>
                  </td>
                </tr>
              );
            })}

            </tbody>
          </table>
        </div>
        <div className="ui_tb_h30">
          <div className="ui_flt" style={{height: '30px', lineHeight: '30px'}}>
            共有
            <span className="ui_txt_bold04">{this.props.value.allhouse.length}</span>
            条记录，当前第
            <span className="ui_txt_bold04">
              {this.props.value.currentHousePage}
              /
              {Math.ceil(this.props.value.allhouse.length / 5)}</span>
            页
          </div>
          <div className="ui_frt">
            <input type="button" value="上一页" className="ui_input_btn01"
                   onClick={
                     () => {
                       let conditions = this.props.value.currentHouseConditions;
                       conditions['currentPage'] = this.props.value.currentHousePage - 1;
                       //console.log('当前条件', conditions);
                       if (this.props.value.currentHousePage > 1) {
                         this.props.setHousePage(this.props.value.currentHousePage - 1);
                         console.log(this.props.value.currentHousePage);
                         this.props.queryHouses(conditions);
                       }
                     }
                   }
            />
            <input type="button" value="下一页" className="ui_input_btn01"
                   onClick={
                     () => {
                       let conditions = this.props.value.currentHouseConditions;
                       conditions['currentPage'] = parseInt(this.props.value.currentHousePage) + 1;
                       //console.log('当前条件', conditions);
                       if (this.props.value.currentHousePage < Math.ceil(this.props.value.allhouse.length / 5)) {
                         this.props.setHousePage(this.props.value.currentHousePage + 1);
                         console.log(this.props.value.currentHousePage);
                         this.props.queryHouses(conditions);
                       }
                     }
                   }
            />
            转到第<input type="text" id="jumpNumTxt" className="ui_input_txt01"
                      value={this.props.value.currentHousePage}
                      onChange={e => {
                        this.props.setHousePage(e.target.value);
                      }}
          />页
            <input type="button" className="ui_input_btn01" value="跳转"
                   onClick={
                     () => {
                       let conditions = this.props.value.currentHouseConditions;
                       conditions['currentPage'] = this.props.value.currentHousePage;
                       //console.log('当前条件', conditions);
                       //console.log(this.props.value.currentHousePage);
                       if (
                         this.props.value.currentHousePage >= 1 &&
                         this.props.value.currentHousePage <= Math.ceil(this.props.value.allhouse.length / 5)
                       ) {
                         this.props.queryHouses(conditions);
                       }
                     }
                   }
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

export default connect(mapState, (dispatch) => bindActionCreators(actionCreators, dispatch))(house);
