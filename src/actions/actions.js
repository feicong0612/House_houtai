import request, {onSuccess, onFailure, onRequest} from '../lib/request';

export const actions = {
  SAY_HELLO: 'SAY_HELLO',
  SEND_ASYNC_REQUEST: 'SEND_ASYNC_REQUEST',
  QUERY_USERS: 'QUERY_USERS',         //查询用户信息
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',     //登录成功
  LOGIN_EXIT: 'LOGIN_EXIT',           //注销登录
  INSERT_USERS: 'INSERT_USERS',       //增加用户
};

export const actionCreators = {
  sayHello: (text) => ({type: actions.SAY_HELLO, payload: text}),
  sendAsyncRequest:
    (params) => request.get('https://jsonplaceholder.typicode.com/posts', params)(actions.SEND_ASYNC_REQUEST),
  queryUsers: (params) => request.get('http://127.0.0.1:3000/userQuery', params)(actions.QUERY_USERS),
  insertUsers: (params) => request.get('http://127.0.0.1:3000/userInsert', params)(actions.INSERT_USERS),
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

};
