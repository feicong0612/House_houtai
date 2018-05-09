import request, {onSuccess, onFailure, onRequest} from '../lib/request';

export const actions = {
  SAY_HELLO: 'SAY_HELLO',
  SEND_ASYNC_REQUEST: 'SEND_ASYNC_REQUEST',
  QUERY_USERS: 'QUERY_USERS',         //查询用户信息
  DELETE_USERS: 'DELETE_USERS',       //删除用户信息
  UPDATE_USERS: 'UPDATE_USERS',       //更新用户信息
  QUERY_ALL_USERS: 'QUERY_ALL_USERS',    //查询所有用户信息
  SET_USERS_PAGE: 'SET_USERS_PAGE',      //设置当前用户信息页码
  SET_USER_INFOR: 'SET_USER_INFOR',      //设置当前修改的用户信息
  SET_HOUSE_INFOR: 'SET_HOUSE_INFOR',    //设置当前修改的房屋信息
  SET_HOUSE_PAGE: 'SET_HOUSE_PAGE',      //设置当房屋户信息页码
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',     //登录成功
  LOGIN_EXIT: 'LOGIN_EXIT',           //注销登录
  INSERT_USERS: 'INSERT_USERS',       //增加用户
  QUERY_HOUSES: 'QUERY_HOUSES',       //查询符合条件房屋信息
  QUERY_ALL_HOUSES: 'QUERY_ALL_HOUSES',       //查询所有房屋信息
  DELETE_HOUSES: 'DELETE_HOUSES',       //删除房屋信息
  UPDATE_HOUSES: 'UPDATE_HOUSES',       //修改房屋信息
  SET_CONDITION: 'SET_CONDITION',     //设置条件样式
  CONDITION: 'CONDITION',             //设置条件内容
  USER_CONDITION: 'USER_CONDITION',       //设置用户条件内容
  HOUSE_CONDITION: 'HOUSE_CONDITION',     //设置房屋条件内容
  SHOW_INSERT_HOUSE: 'SHOW_INSERT_HOUSE', //设置上传房屋的显示问题
  SHOW_EDIT_HOUSE: 'SHOW_EDIT_HOUSE', //设置修改房屋的显示问题
  SHOW_INSERT_USER: 'SHOW_INSERT_USER', //设置上传房屋的显示问题
  SHOW_EDIT_USER: 'SHOW_EDIT_USER', //设置修改房屋的显示问题
};

export const actionCreators = {
  sayHello: (text) => ({type: actions.SAY_HELLO, payload: text}),
  sendAsyncRequest:
    (params) => request.get('https://jsonplaceholder.typicode.com/posts', params)(actions.SEND_ASYNC_REQUEST),
  queryUsers: (params) => request.get('http://127.0.0.1:3000/userQuery', params)(actions.QUERY_USERS),
  deleteUsers: (params) => request.get('http://127.0.0.1:3000/userDelete', params)(actions.DELETE_USERS),
  updateUsers: (params) => request.get('http://127.0.0.1:3000/userUpdate', params)(actions.UPDATE_USERS),
  queryAllUsers: (params) => request.get('http://127.0.0.1:3000/userQuery', params)(actions.QUERY_ALL_USERS),
  insertUsers: (params) => request.get('http://127.0.0.1:3000/userInsert', params)(actions.INSERT_USERS),
  queryHouses: (params) => request.get('http://127.0.0.1:3000/houseQuery', params)(actions.QUERY_HOUSES),
  updateHouses: (params) => request.get('http://127.0.0.1:3000/houseUpdate', params)(actions.UPDATE_HOUSES),
  deleteHouses: (params) => request.get('http://127.0.0.1:3000/houseDelete', params)(actions.DELETE_HOUSES),
  queryAllHouses: (params) => request.get('http://127.0.0.1:3000/houseQuery', params)(actions.QUERY_ALL_HOUSES),
  loginSuccess: () => {
    return {
      type: 'LOGIN_SUCCESS'
    };
  },
  loginExit: () => {
    return {
      type: 'LOGIN_EXIT'
    };
  },
  setCondition: (condition, value) => {
    return {
      type: 'SET_CONDITION',
      condition: condition,
      value: value
    };
  },
  setUserInfor: (value) => {
    return {
      type: 'SET_USER_INFOR',
      value: value
    };
  },
  setHouseInfor: (value) => {
    return {
      type: 'SET_HOUSE_INFOR',
      value: value
    };
  },
  conditions: (condition) => {
    return {
      type: 'CONDITION',
      condition: condition
    };
  },
  userConditions: (condition) => {
    return {
      type: 'USER_CONDITION',
      condition: condition
    };
  },
  houseConditions: (condition) => {
    return {
      type: 'HOUSE_CONDITION',
      condition: condition
    };
  },
  setUserPage: (page) => {
    return {
      type: 'SET_USERS_PAGE',
      page: page
    };
  },
  setHousePage: (page) => {
    return {
      type: 'SET_HOUSE_PAGE',
      page: page
    };
  },
  showInsertHouse: (value) => {
    return {
      type: 'SHOW_INSERT_HOUSE',
      value: value
    };
  },
  showEditHouse: (value) => {
    return {
      type: 'SHOW_EDIT_HOUSE',
      value: value
    };
  },
  showInsertUser: (value) => {
    return {
      type: 'SHOW_INSERT_USER',
      value: value
    };
  },
  showEditUser: (value) => {
    return {
      type: 'SHOW_EDIT_USER',
      value: value
    };
  },
};

export const handlers = {
  [actions.SAY_HELLO]: (state, action) => ({
    ...state,
    name: action.payload
  }),
  [onSuccess(actions.SEND_ASYNC_REQUEST)]: (state, action) => {
    //console.log('异步请求：', action);
    return {
      ...state,
      list: action.payload
    };
  },
  [onSuccess(actions.QUERY_USERS)]: (state, action) => {
    // console.log('查询数据中...');
    if (action.payload.user.length > 0) {
      state.user = action.payload.user;
    }
    return Object.assign({}, state);
  },
  [onSuccess(actions.DELETE_USERS)]: (state, action) => {
    //console.log('删除用户中...');
    return Object.assign({}, state);
  },
  [onSuccess(actions.DELETE_USERS)]: (state, action) => {
    //console.log('更新用户中...');
    return Object.assign({}, state);
  },
  [onSuccess(actions.QUERY_ALL_USERS)]: (state, action) => {
    // console.log('查询数据中...');
    if (action.payload.user.length > 0) {
      state.allUser = action.payload.user;
    }
    return Object.assign({}, state);
  },
  [onSuccess(actions.INSERT_USERS)]: (state, action) => {
    //console.log('增加用户成功', action);
    return Object.assign({}, state);
  },
  [onSuccess(actions.QUERY_HOUSES)]: (state, action) => {
    //console.log('查询房屋信息成功', action);
    if (action.payload.house.length >= 0) {
      state.house = action.payload.house;
    }
    return Object.assign({}, state);
  },
  [onSuccess(actions.QUERY_ALL_HOUSES)]: (state, action) => {
    //console.log('查询所有房屋信息成功', action);
    if (action.payload.house.length >= 0) {
      state.allhouse = action.payload.house;
    }
    return Object.assign({}, state);
  },
  [actions.LOGIN_SUCCESS]: (state, action) => {
    // console.log('查询数据中...');
    state.open.login = 'success';
    return Object.assign({}, state);
  },
  [actions.LOGIN_EXIT]: (state, action) => {
    // console.log('查询数据中...');
    state.open.login = 'error';
    state.user = [{id: '', uname: ''}];
    return Object.assign({}, state);
  },
  [actions.SET_CONDITION]: (state, action) => {
    //console.log('显示条件中...', action.condition, action.value);
    state.open[action.condition] = action.value;
    return Object.assign({}, state);
  },
  [actions.SET_USERS_PAGE]: (state, action) => {
    //console.log('设置用户信息页码...', action.condition, action.value);
    state.currentUserPage = action.page;
    return Object.assign({}, state);
  },
  [actions.SET_HOUSE_PAGE]: (state, action) => {
    //console.log('设置房屋信息页码...', action.condition, action.value);
    state.currentHousePage = action.page;
    return Object.assign({}, state);
  },
  [actions.SET_USER_INFOR]: (state, action) => {
    //console.log('设置用户信息...', action.condition, action.value);
    state.currentUserInfor = action.value;
    return Object.assign({}, state);
  },
  [actions.SET_HOUSE_INFOR]: (state, action) => {
    //console.log('设置房屋信息...', action.condition, action.value);
    state.currentHouseInfor = action.value;
    return Object.assign({}, state);
  },
  [actions.CONDITION]: (state, action) => {
    //console.log('显示条件中...', action.condition, action.value);
    state.currentConditions = action.condition;
    return Object.assign({}, state);
  },
  [actions.USER_CONDITION]: (state, action) => {
    //console.log('显示用户条件中...', action.condition, action.value);
    state.currentUserConditions = action.condition;
    return Object.assign({}, state);
  },
  [actions.HOUSE_CONDITION]: (state, action) => {
    //console.log('显示房屋条件中...', action.condition, action.value);
    state.currentHouseConditions = action.condition;
    return Object.assign({}, state);
  },
  [actions.SHOW_INSERT_HOUSE]: (state, action) => {
    //console.log('显示添加房屋模块显示属性中...', action.value);
    state.insertHouse = action.value;
    return Object.assign({}, state);
  },
  [actions.SHOW_EDIT_HOUSE]: (state, action) => {
    //console.log('显示修改房屋模块显示属性中...', action.value);
    state.editHouse = action.value;
    return Object.assign({}, state);
  },
  [actions.SHOW_INSERT_USER]: (state, action) => {
    //console.log('显示添加用户模块显示属性中...', action.value);
    state.insertUser = action.value;
    return Object.assign({}, state);
  },
  [actions.SHOW_EDIT_USER]: (state, action) => {
    //console.log('显示修改用户模块显示属性中...', action.value);
    state.editUser = action.value;
    return Object.assign({}, state);
  },
};
