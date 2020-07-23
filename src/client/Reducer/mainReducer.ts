import produce from 'immer';
import * as types from './actionsTypes';

const initialState:{userId:string, userName:string, anonymous:string, email:string, address:string, karma:number, userRequests:object[], userTasks:object[], appTasks:object[], currentTask:object } = {
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

export default (state = initialState, action: { type?: any; payload: any; }) => produce(state, (draft: { userId: any; userName: any; anonymous: any; email: any; address: any; karma: any; userRequests: any; userTasks: any; appTasks: any; currentTask: any; }) => {
  let { userId, userName, anonymous, email, address, karma, userRequests,userTasks, appTasks, currentTask} = draft;

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
        userRequests.shift(action.payload)
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
        const newUserRequests: { id: any; }[] = [];
        userRequests.forEach((task: { id: any; }) => {
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
        userTasks.shift(action.payload)
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
        userTasks.forEach((task: { id: any; }) => {
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
        appTasks.shift(action.payload)
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
        appTasks.forEach((task: { id: any; }) => {
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
})