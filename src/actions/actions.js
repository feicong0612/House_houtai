import request, {onSuccess} from '../lib/request';

export const actions = {
  SAY_HELLO: 'SAY_HELLO',
  SEND_ASYNC_REQUEST: 'SEND_ASYNC_REQUEST',
  QUERY_DATA: 'QUERY_DATA',         //查询图书信息
  INSERT_DATA: 'INSERT_DATA',       //增加一条信息
  DELETE_DATA: 'INSERT_DATA',       //删除一条信息
  UPDATE_DATA: 'INSERT_DATA',       //修改一条信息
  ADD_DATA: 'ADD_DATA',             //显示添加框
  ADD_CANCEL: 'ADD_CANCEL',         //影藏添加框
  MODIFY_DATA: 'MODIFY_DATA',       //显示修改框
  MODIFY_CANCEL: 'MODIFY_CANCEL',   //影藏修改框
  IS_EXISTS: 'IS_EXISTS',           //查询是id否存在
  REG_SEARCH: 'REG_SEARCH'
};

export const actionCreators = {
  sayHello: (text) => ({type: actions.SAY_HELLO, payload: text}),
  sendAsyncRequest:
    (params) => request.get('https://jsonplaceholder.typicode.com/posts', params)(actions.SEND_ASYNC_REQUEST),
  queryData: (params) => request.get('http://127.0.0.1:3000/', params)(actions.QUERY_DATA),
  deleteData: (params) => request.get('http://127.0.0.1:3000/delete', params)(actions.DELETE_DATA),
  insertData: (params) => request.get('http://127.0.0.1:3000/insert', params)(actions.INSERT_DATA),
  updateData: (params) => request.get('http://127.0.0.1:3000/update', params)(actions.UPDATE_DATA),
  queryId: (params) => request.get('http://127.0.0.1:3000/', params)(actions.IS_EXISTS),
  regSearch: (params) => request.get('http://127.0.0.1:33000/', params)(actions.REG_SEARCH),
  addData: () => {
    return {
      type: 'ADD_DATA'
    };
  },
  addCancel: () => {
    return {
      type: 'ADD_CANCEL'
    };
  },
  modifyData: (bookInfo) => {
    return {
      type: 'MODIFY_DATA',
      bookInfo
    };
  },
  modifyCancel: () => {
    return {
      type: 'MODIFY_CANCEL'
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
  [onSuccess(actions.QUERY_DATA)]: (state, action) => {
    //console.log('查询数据中...');
    state.book = action.payload.book;
    console.log(action);
    return Object.assign({}, state);
  },
  [onSuccess(actions.IS_EXISTS)]: (state, action) => {
    //console.log('查询ID中...', action.payload.book);
    state.bookId = action.payload.book;
    //state.bookId = {''};
    return Object.assign({}, state);
  },
  [onSuccess(actions.DELETE_DATA)]: (state, action) => {
    //console.log('删除数据中...');
    if (action.payload.book) {
      state.book = action.payload.book;
    }
    return Object.assign({}, state);
  },
  [onSuccess(actions.INSERT_DATA)]: (state, action) => {
    //console.log('增加数据中...');
    if (action.payload.book) {
      state.book = action.payload.book;
    }
    return Object.assign({}, state);
  },
  [onSuccess(actions.UPDATE_DATA)]: (state, action) => {
    //console.log('修改数据中...');
    if (action.payload.book) {
      state.book = action.payload.book;
    }
    return Object.assign({}, state);
  },
  [onSuccess(actions.REG_SEARCH)]: (state, action) => {
    //console.log('模糊查找开始！');
    state.search = action.payload.book;
    return Object.assign({}, state);
  },
  [actions.ADD_DATA]: (state, action) => {
    //console.log('显示图书增加框');
    state.addBook = true;
    return Object.assign({}, state);
  },
  [actions.ADD_CANCEL]: (state, action) => {
    //console.log('隐藏图书增加框');
    state.addBook = false;
    return Object.assign({}, state);
  },
  [actions.MODIFY_DATA]: (state, action) => {
    //console.log('显示图书修改框');
    state.updateBook = true;
    state.updateInfo = action.bookInfo;
    return Object.assign({}, state);
  },
  [actions.MODIFY_CANCEL]: (state, action) => {
    //console.log('影藏图书修改框');
    state.updateBook = false;
    state.updateInfo = {id: '', title: '', type: ''};
    return Object.assign({}, state);
  },
};
