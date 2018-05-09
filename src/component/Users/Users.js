import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionCreators} from '../../actions/actions';
import {Link, withRouter} from 'react-router-dom';
import {debug} from 'debug';

class house extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    this.props.queryUsers();
    this.props.queryAllUsers({pageSize: 'all'});
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
              <th>编号</th>
              <th>名称</th>
              <th>密码</th>
              <th>电话</th>
              <th>操作</th>
            </tr>
            {this.props.value.user.map((item, index) => {
              return (
                <tr key={index} style={{background: 'rgb(255, 255, 255)'}}>
                  <td style={{color: 'rgb(144, 144, 144)'}}>
                    <input type="checkbox" name="IDCheck" value="14458579642011" className="acb"/>
                  </td>
                  <td style={{color: 'rgb(144, 144, 144)'}}>{index + 1}</td>
                  <td style={{color: 'rgb(144, 144, 144)'}}>{item.uname}</td>
                  <td style={{color: 'rgb(144, 144, 144)'}}>{item.upwd}</td>
                  <td style={{color: 'rgb(144, 144, 144)'}}>{item.phone}</td>
                  <td style={{color: 'rgb(144, 144, 144)'}}>
                    <a href="#" className="edit"
                       onClick={e => {
                         e.preventDefault();
                         this.props.showEditUser(true);
                         this.props.setUserInfor({
                           oldUname: item.uname,
                           newUname: item.uname,
                           upwd: item.upwd,
                           phone: item.phone
                         })
                         ;
                       }}
                    >编辑</a>
                    <span> | </span>
                    <a href="#"
                       onClick={e => {
                         e.preventDefault();
                         if (confirm('确定要删除数据吗？')) {
                           this.props.deleteUsers({uname: item.uname});
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
            <span className="ui_txt_bold04">{this.props.value.allUser.length}</span>
            条记录，当前第
            <span className="ui_txt_bold04">
              {this.props.value.currentUserPage}/{Math.ceil(this.props.value.allUser.length / 5)}页
            </span>
          </div>
          <div className="ui_frt">
            <input type="button" value="上一页" className="ui_input_btn01"
                   onClick={
                     () => {
                       let conditions = this.props.value.currentUserConditions;
                       conditions['currentPage'] = this.props.value.currentUserPage - 1;
                       //console.log('当前条件', conditions);
                       if (this.props.value.currentUserPage > 1) {
                         this.props.setUserPage(this.props.value.currentUserPage - 1);
                         console.log(this.props.value.currentUserPage);
                         this.props.queryUsers(conditions);
                       }
                     }
                   }/>
            <input type="button" value="下一页" className="ui_input_btn01"
                   onClick={
                     () => {
                       let conditions = this.props.value.currentUserConditions;
                       conditions['currentPage'] = parseInt(this.props.value.currentUserPage) + 1;
                       //console.log('当前条件', conditions);
                       if (this.props.value.currentUserPage < Math.ceil(this.props.value.allUser.length / 5)) {
                         this.props.setUserPage(this.props.value.currentUserPage + 1);
                         console.log(this.props.value.currentUserPage);
                         this.props.queryUsers(conditions);
                       }
                     }
                   }
            />
            转到第<input type="text" id="jumpNumTxt" className="ui_input_txt01"
                      value={this.props.value.currentUserPage}
                      onChange={e => {
                        this.props.setUserPage(e.target.value);
                      }}
          />页
            <input type="button" className="ui_input_btn01" value="跳转"
                   onClick={
                     () => {
                       let conditions = this.props.value.currentConditions;
                       conditions['currentPage'] = this.props.value.currentUserPage;
                       //console.log('当前条件', conditions);
                       console.log(this.props.value.currentUserPage);
                       if (
                         this.props.value.currentUserPage >= 1 &&
                         this.props.value.currentUserPage <= Math.ceil(this.props.value.allUser.length / 5)
                       ) {
                         this.props.queryUsers(conditions);
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
