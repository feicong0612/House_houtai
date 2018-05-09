import {applyMiddleware, compose, createStore} from 'redux';
import {handlers} from '../actions/actions';
import {apiMiddleware} from 'redux-api-middleware';
import {createRequestTypeHandlerReducer} from '../lib/request';

const middlewares = [apiMiddleware];

/**
 * 设置初始状态
 */
const initialState = {
  user: [{id: '1', uname: 'fc1', upwd: '100*11', phone: '000'}],
  allUser: [{id: '1', uname: 'fc1', upwd: '100*11', phone: '000'}],
  admin: [{id: '1', uname: 'fc1'}],
  details: 0,
  house: [{
    id: '',
    title: '查询中...',
    location: '查询中...',
    way: '查询中...',
    area: '查询中...',
    rent: '查询中...',
    type: '查询中...',
    room: '查询中...',
    toward: '查询中...',
    user: '查询中...',
    isonsale: '查询中...',
  }],
  allhouse: [{
    id: '',
    title: '查询中...',
    location: '查询中...',
    way: '查询中...',
    area: '查询中...',
    rent: '查询中...',
    type: '查询中...',
    room: '查询中...',
    toward: '查询中...',
    user: '查询中...',
    isonsale: '查询中...',
  }],
  open: {
    login: 'error',
    location: 0,
    way: 0,
    rent: 0,
    room: 0,
    type: 0,
    toward: 0,
  },
  conditions: {
    location: ['不限', '武进区', '新北区', '天宁区', '钟楼区', '溧阳市'],
    way: ['不限', '整租', '合租', '购买'],
    rent: ['不限',
      [0, 500],
      [500, 1000],
      [1000, 2000],
      [2000, 3000],
      [3000, 4000],
    ],
    type: ['不限', '1室', '2室', '3室', '4室', '5室', '5室以上'],
    room: ['不限', '普通住宅', '公寓', '别墅', '平房'],
    toward: ['不限', '东', '西', '南', '北'],
  },
  currentHouseConditions: {},
  currentUserConditions: {},
  currentUserPage: 1,
  currentHousePage: 1,
  currentUserInfor: {oldUname: '**', newUname: '****', upwd: '***', phone: '***'},
  currentHouseInfor: {
    oldTitle: '**',
    newTitle: '****',
    location: '***',
    community: '***',
    way: '***',
    area: '***',
    rent: '***',
    type: '***',
    room: '***',
    toward: '***',
    user: '***',
    phone: '***',
    video: ''
  },
  insertHouse: false,
  editHouse: false,
  insertUser: false,
  editUser: false,
};

const createStoreEnhanced = compose(applyMiddleware(...middlewares))(createStore);

const createGenericTypeHandlerReducer = handlers => (state = {}, action) => {
  if (handlers && handlers.hasOwnProperty(action.type)) {
    return handlers[action.type](state, action);
  } else {
    return state;
  }
};

const genericTypeHandlerReducer = createGenericTypeHandlerReducer(handlers);
const requestTypeHandlerReducer = createRequestTypeHandlerReducer(handlers);


const reducers = [
  genericTypeHandlerReducer,
  requestTypeHandlerReducer
];

/**
 * Create store
 */
const store = createStoreEnhanced((state = initialState, action) => {
  let prevState = state, nextState = state;

  for (let i = 0; i < reducers.length; i++) {
    const reducer = reducers[i];
    nextState = reducer(prevState, action);

    // break the loop when state changed
    if (prevState !== nextState) {
      break;
    }
  }

  return nextState;
});

export default store;
