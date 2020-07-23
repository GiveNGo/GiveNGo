import produce from 'immer';
import * as types from './actionsTypes';

const initialState:{userId:string, userName:string, anonymous:string, email:string, address:string, karma:number, userRequests:{id?:string}[], userTasks:{id?:string}[], appTasks:{id?:string}[], currentTask:{id?:string} } = {
  userId:'', 
  userName:'',
  anonymous: '', 
  email:'', 
  address:'', 
  karma:0, 
  userRequests:[],
  userTasks:[], 
  appTasks:[],
  currentTask:{}
};

export default (state = initialState, action: { type?: string; payload: any | {id?:string}}) => {
  let userId = state.userId;
  let userName = state.userName;
  let anonymous = state.anonymous;
  let email = state.email;
  let address = state.address;
  let karma = state.karma;
  let userRequests = [...state.userRequests];
  let userTasks = [...state.appTasks];
  let appTasks = [...state.appTasks];
  let currentTask = {...state.currentTask};

  switch (action.type) {
    case types.SET_USER_ID: {
      if (action.payload) {
        return {
          ...state,  
          userId: action.payload
        }
      }
      break;
    }
    case types.SET_USER_NAME: {
      if (action.payload) {
        return {
          ...state,  
          userName: action.payload
        }
      }
      break;
    }
    case types.SET_ANONYMOUS: {
      if (action.payload) {
        return {
          ...state, 
          anonymous: action.payload
        }
      }
      break;
    }
    case types.SET_EMAIL: {
      if (action.payload) {
        return {
          ...state, 
          email: action.payload
        }
      }
      break;
    }
    case types.SET_ADDRESS: {
      if (action.payload) {
        return {
          ...state, 
          address: action.payload
        }
      }
      break;
    }
    case types.SET_KARMA: {
      if (action.payload) {
        return {
          ...state, 
          karma: action.payload
        }
      }
      break;
    }
    case types.ADD_KARMA: {
      return {
        ...state, 
        karma:karma+1
      }
      break;
    }
    case types.SET_USER_REQUESTS: {
      if (action.payload) {
        return {
          ...state, 
          userRequests: action.payload
        }
      }
      break;
    }
    case types.ADD_USER_REQUESTS: {
      if (action.payload) {
        userRequests.unshift(action.payload)
        return {
          ...state,
          userRequests: userRequests 
        }
      }
      break;
    }
    case types.REMOVE_USER_REQUESTS: {
      if (action.payload) {
        const { payload } = action;
        const newUserRequests: {id?:string}[] = [];
        userRequests.forEach((task:{id?:string}) => {
          if (task.id !== payload) {
            newUserRequests.push(task);
          }
        })
        return {
          ...state,
          userRequests:newUserRequests
        }
      }
      break;
    }
    case types.SET_USER_TASKS: {
      if (action.payload) {
        return {
          ...state,
          userTasks: action.payload
        }
      }
      break;
    }
    case types.ADD_USER_TASKS: {
      if (action.payload) {
        userTasks.unshift(action.payload)
        return {
          ...state,
          userTasks: userTasks
        }
      }
      break;
    }
    case types.REMOVE_USER_TASKS: {
      if (action.payload) {
        const { payload } = action;
        const newUserTasks: any[] = [];
        userTasks.forEach(task => {
          if (task.id !== payload) {
            newUserTasks.push(task);
          }
        })
        return {
          ...state,
          userTasks: newUserTasks
        }
      }
      break;
    }
    case types.SET_APP_TASKS: {
      if (action.payload) {
        return {
          ...state,
          appTasks: action.payload
        }
      }
      break;
    }
    case types.ADD_APP_TASKS: {
      if (action.payload) {
        appTasks.unshift(action.payload)
        return {
          ...state,
          appTasks: appTasks
        }
      }
      break;
    }
    case types.REMOVE_APP_TASKS: {
      if (action.payload) {
        const { payload } = action;
        const newAppTasks: any[] = [];
        appTasks.forEach(task => {
          if (task.id !== payload) {
            newAppTasks.push(task);
          }
        })
        return {
          ...state,
          appTasks: newAppTasks
        }
      }
      break;
    }
    case types.SET_CURRENT_TASK: {
      if (action.payload) {
        return {
          ...state,
          currentTask: action.payload
        }
      }
      break;
    }
    default:
      return {
        ...state
      }
  }
}