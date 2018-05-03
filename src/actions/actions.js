import request, {onSuccess, onFailure, onRequest} from '../lib/request';

export const actions = {
  SAY_HELLO: 'SAY_HELLO',
  SEND_ASYNC_REQUEST: 'SEND_ASYNC_REQUEST',
  QUERY_USERS: 'QUERY_USERS',         //查询用户信息
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',     //登录成功
  LOGIN_EXIT: 'LOGIN_EXIT',           //注销登录
  INSERT_USERS: 'INSERT_USERS',       //增加用户
  QUERY_HOUSES: 'QUERY_HOUSES',       //查询符合条件房屋信息
  QUERY_ALL_HOUSES: 'QUERY_ALL_HOUSES',       //查询所有房屋信息
  SET_CONDITION: 'SET_CONDITION',     //设置条件样式
  SET_DETAILS: 'SET_DETAILS',         //设置当前房子信息
  CONDITION: 'CONDITION',             //设置条件内容
};

export const actionCreators = {
  sayHello: (text) => ({type: actions.SAY_HELLO, payload: text}),
  sendAsyncRequest:
    (params) => request.get('https://jsonplaceholder.typicode.com/posts', params)(actions.SEND_ASYNC_REQUEST),
  queryUsers: (params) => request.get('http://127.0.0.1:3000/userQuery', params)(actions.QUERY_USERS),
  insertUsers: (params) => request.get('http://127.0.0.1:3000/userInsert', params)(actions.INSERT_USERS),
  queryHouses: (params) => request.get('http://127.0.0.1:3000/houseQuery', params)(actions.QUERY_HOUSES),
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
  setDetails: (idx) => {
    return {
      type: 'SET_DETAILS',
      idx: idx
    };
  },
  conditions: (condition) => {
    return {
      type: 'CONDITION',
      condition: condition
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
    console.log('查询所有房屋信息成功', action);
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
  [actions.SET_DETAILS]: (state, action) => {
    //console.log('显示详细信息中...', action.condition, action.value);
    state.details = action.idx;
    return Object.assign({}, state);
  },
  [actions.CONDITION]: (state, action) => {
    //console.log('显示条件中...', action.condition, action.value);
    state.currentConditions = action.condition;
    return Object.assign({}, state);
  },
};
