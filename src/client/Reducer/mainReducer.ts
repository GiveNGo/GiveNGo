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
  let copyUserId = state.userId? state.userId: '';
  let copyUserName = state.userName? state.userName: '';
  let copyAnonymous = state.anonymous? state.anonymous: copyUserName;
  let copyEmail = state.email? state.email: '';
  let copyAddress = state.address? state.address: '';
  let copyKarma = state.karma? state.karma : 0;
  let copyUserRequests = state.userRequests ? state.userRequests.slice() : [];
  let copyUserTasks = state.userTasks ? state.userTasks.slice() : [];
  let copyAppTasks = state.appTasks ? state.appTasks.slice() : [];
  let copyCurrentTask = state.currentTask ? {...state.currentTask} : {};

  switch (action.type) {
    case types.SET_USER_ID: {
      if (action.payload) {
        return {
          userId: action.payload, 
          userName:copyUserName,
          anonymous: copyAnonymous, 
          email: copyEmail, 
          address: copyAddress, 
          karma: copyKarma, 
          userRequests: copyUserRequests,
          userTasks: copyUserTasks, 
          appTasks: copyAppTasks,
          currentTask:copyCurrentTask, 
        }
      }
      break;
    }
    case types.SET_USER_NAME: {
      if (action.payload) {
        console.log('action.payload', action.payload)
        return {
          userId: copyUserId, 
          userName: action.payload,
          anonymous: copyAnonymous, 
          email: copyEmail, 
          address: copyAddress, 
          karma: copyKarma, 
          userRequests: copyUserRequests,
          userTasks: copyUserTasks, 
          appTasks: copyAppTasks,
          currentTask:copyCurrentTask, 
        }
      }
      
      break;
    }
    case types.SET_ANONYMOUS: {
      if (action.payload) {
        return {
          userId: copyUserId, 
          userName:copyUserName,
          anonymous: action.payload, 
          email: copyEmail, 
          address: copyAddress, 
          karma: copyKarma, 
          userRequests: copyUserRequests,
          userTasks: copyUserTasks, 
          appTasks: copyAppTasks,
          currentTask:copyCurrentTask 
        }
      }
      break;
    }
    case types.SET_EMAIL: {
      if (action.payload) {
        return {
          userId: copyUserId, 
          userName:copyUserName,
          anonymous: copyAnonymous, 
          email: action.payload, 
          address: copyAddress, 
          karma: copyKarma, 
          userRequests: copyUserRequests,
          userTasks: copyUserTasks, 
          appTasks: copyAppTasks,
          currentTask:copyCurrentTask 
        }
      }
      break;
    }
    case types.SET_ADDRESS: {
      if (action.payload) {
        return {
          userId: copyUserId, 
          userName:copyUserName,
          anonymous: copyAnonymous, 
          email: copyEmail, 
          address: action.payload, 
          karma: copyKarma, 
          userRequests: copyUserRequests,
          userTasks: copyUserTasks, 
          appTasks: copyAppTasks,
          currentTask:copyCurrentTask 
        }
      }
      break;
    }
    case types.SET_KARMA: {
      if (action.payload) {
        if (action.payload === copyKarma){
          return {
            state
          }
        } else {
          return {
            userId: copyUserId, 
            userName:copyUserName,
            anonymous: copyAnonymous, 
            email: copyEmail, 
            address: copyAddress, 
            karma: action.payload, 
            userRequests: copyUserRequests,
            userTasks: copyUserTasks, 
            appTasks: copyAppTasks,
            currentTask:copyCurrentTask 
          }
        }
      }
      break;
    }
    case types.ADD_KARMA: {
      copyKarma++
      return {
        userId: copyUserId, 
        userName:copyUserName,
        anonymous: copyAnonymous, 
        email: copyEmail, 
        address: copyAddress, 
        karma: copyKarma, 
        userRequests: copyUserRequests,
        userTasks: copyUserTasks, 
        appTasks: copyAppTasks,
        currentTask:copyCurrentTask 
      }
      break;
    }
    case types.SET_USER_REQUESTS: {
      if (action.payload) {
        return {
          userId: copyUserId, 
          userName:copyUserName,
          anonymous: copyAnonymous, 
          email: copyEmail, 
          address: copyAddress, 
          karma: copyKarma, 
          serRequests: action.payload,
          userTasks: copyUserTasks, 
          appTasks: copyAppTasks,
          currentTask:copyCurrentTask 
        }
      }
      break;
    }
    case types.ADD_USER_REQUESTS: {
      if (action.payload) {
        copyUserRequests.unshift(action.payload)
        return {
          userId: copyUserId, 
          userName:copyUserName,
          anonymous: copyAnonymous, 
          email: copyEmail, 
          address: copyAddress, 
          karma: copyKarma, 
          userRequests: copyUserRequests,
          userTasks: copyUserTasks, 
          appTasks: copyAppTasks,
          currentTask:copyCurrentTask 
        }
      }
      break;
    }
    case types.REMOVE_USER_REQUESTS: {
      if (action.payload) {
        const { payload } = action;
        const newUserRequests: {id?:string}[] = [];
        copyUserRequests.forEach((task:{id?:string}) => {
          if (task.id !== payload) {
            newUserRequests.push(task);
          }
        })
        return {
          userId: copyUserId, 
          userName:copyUserName,
          anonymous: copyAnonymous, 
          email: copyEmail, 
          address: copyAddress, 
          karma: copyKarma, 
          userRequests:newUserRequests,
          userTasks: copyUserTasks, 
          appTasks: copyAppTasks,
          currentTask:copyCurrentTask 
        }
      }
      break;
    }
    case types.SET_USER_TASKS: {
      if (action.payload) {
        return {
          userId: copyUserId, 
          userName:copyUserName,
          anonymous: copyAnonymous, 
          email: copyEmail, 
          address: copyAddress, 
          karma: copyKarma, 
          userRequests: copyUserRequests,
          userTasks: action.payload, 
          appTasks: copyAppTasks,
          currentTask:copyCurrentTask 
        }
      }
      break;
    }
    case types.ADD_USER_TASKS: {
      if (action.payload) {
        copyUserTasks.unshift(action.payload)
        return {
          userId: copyUserId, 
          userName:copyUserName,
          anonymous: copyAnonymous, 
          email: copyEmail, 
          address: copyAddress, 
          karma: copyKarma, 
          userRequests: copyUserRequests,
          userTasks: copyUserTasks, 
          appTasks: copyAppTasks,
          currentTask:copyCurrentTask 
        }
      }
      break;
    }
    case types.REMOVE_USER_TASKS: {
      if (action.payload) {
        const { payload } = action;
        const newUserTasks: any[] = [];
        copyUserTasks.forEach(task => {
          if (task.id !== payload) {
            newUserTasks.push(task);
          }
        })
        return {
          userId: copyUserId, 
          userName:copyUserName,
          anonymous: copyAnonymous, 
          email: copyEmail, 
          address: copyAddress, 
          karma: copyKarma, 
          userRequests: copyUserRequests,
          userTasks: newUserTasks, 
          appTasks: copyAppTasks,
          currentTask:copyCurrentTask 
        }
      }
      break;
    }
    case types.SET_APP_TASKS: {
      if (action.payload) {
        return {
          userId: copyUserId, 
          userName:copyUserName,
          anonymous: copyAnonymous, 
          email: copyEmail, 
          address: copyAddress, 
          karma: copyKarma, 
          userRequests: copyUserRequests,
          userTasks: copyUserTasks, 
          appTasks: action.payload,
          currentTask:copyCurrentTask 
        }
      }
      break;
    }
    case types.ADD_APP_TASKS: {
      if (action.payload) {
        copyAppTasks.unshift(action.payload)
        return {
          userId: copyUserId, 
          userName:copyUserName,
          anonymous: copyAnonymous, 
          email: copyEmail, 
          address: copyAddress, 
          karma: copyKarma, 
          userRequests: copyUserRequests,
          userTasks: copyUserTasks, 
          appTasks: copyAppTasks,
          currentTask:copyCurrentTask 
        }
      }
      break;
    }
    case types.REMOVE_APP_TASKS: {
      if (action.payload) {
        const { payload } = action;
        const newAppTasks: any[] = [];
        copyAppTasks.forEach(task => {
          if (task.id !== payload) {
            newAppTasks.push(task);
          }
        })
        return {
          userId: copyUserId, 
          userName:copyUserName,
          anonymous: copyAnonymous, 
          email: copyEmail, 
          address: copyAddress, 
          karma: copyKarma, 
          userRequests: copyUserRequests,
          userTasks: copyUserTasks, 
          appTasks: newAppTasks,
          currentTask:copyCurrentTask 
        }
      }
      break;
    }
    case types.SET_CURRENT_TASK: {
      if (action.payload) {
        return {
          userId: copyUserId, 
          userName:copyUserName,
          anonymous: copyAnonymous, 
          email: copyEmail, 
          address: copyAddress, 
          karma: copyKarma, 
          userRequests: copyUserRequests,
          userTasks: copyUserTasks, 
          appTasks: copyAppTasks,
          currentTask: action.payload 
        }
      }
      break;
    }
    case types.LOGIN_OUT: {
        return {
          userId: '', 
          userName: '',
          anonymous: '', 
          email: '', 
          address: '', 
          karma: 0, 
          userRequests: [],
          userTasks: [], 
          appTasks: [],
          currentTask: [] 
        }
      break;
    }
    default:
      return {
        state
      }
  }
}