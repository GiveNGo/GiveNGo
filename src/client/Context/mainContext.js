import produce from 'immer';
import * as types from './actionsTypes';

export default (state, action) => produce(state, draft => {
  const { userId, userName, anonymous, email, address, karma, userRequests,userTasks, appTasks, currentTask} = draft;

  switch (action.type) {
    case types.SET_USER_ID: {
      if (action.payload) {
        userId=action.payload
      }
      break;
    }
    case types.SET_USER_NAME: {
      if (action.payload) {
        userName=action.payload
      }
      break;
    }
    case types.SET_ANONYMOUS: {
      if (action.payload) {
        anonymous=action.payload
      }
      break;
    }
    case types.SET_EMAIL: {
      if (action.payload) {
        email=action.payload
      }
      break;
    }
    case types.SET_ADDRESS: {
      if (action.payload) {
        address=action.payload
      }
      break;
    }
    case types.SET_KARMA: {
      if (action.payload) {
        karma=action.payload
      }
      break;
    }
    case types.ADD_KARMA: {
        karma=karma+1
      break;
    }
    case types.SET_USER_REQUESTS: {
      if (action.payload) {
        userRequests=action.payload
      }
      break;
    }
    case types.ADD_USER_REQUESTS: {
      if (action.payload) {
        userRequests.shift(action.payload)
      }
      break;
    }
    case types.REMOVE_USER_REQUESTS: {
      if (action.payload) {
        const { payload } = action;
        const newUserRequests = [];
        userRequests.forEach(task => {
          if (task.id !== payload) {
            newUserRequests.push(task);
          }
        })
        userTasks=newUserTasks
        
      }
      break;
    }
    case types.SET_USER_TASKS: {
      if (action.payload) {
        userTasks=action.payload
      }
      break;
    }
    case types.ADD_USER_TASKS: {
      if (action.payload) {
        userTasks.shift(action.payload)
      }
      break;
    }
    case types.REMOVE_USER_TASKS: {
      if (action.payload) {
        const { payload } = action;
        const newUserTasks = [];
        userTasks.forEach(task => {
          if (task.id !== payload) {
            newUserTasks.push(task);
          }
        })
        userTasks=newUserTasks
      }
      break;
    }
    case types.SET_APP_TASKS: {
      if (action.payload) {
        appTasks=action.payload
      }
      break;
    }
    case types.ADD_APP_TASKS: {
      if (action.payload) {
        appTasks.shift(action.payload)
      }
      break;
    }
    case types.REMOVE_APP_TASKS: {
      if (action.payload) {
        const { payload } = action;
        const newAppTasks = [];
        appTasks.forEach(task => {
          if (task.id !== payload) {
            newAppTasks.push(task);
          }
        })
        appTasks=newAppTasks
      }
      break;
    }
    case types.SET_CURRENT_TASK: {
      if (action.payload) {
        currentTask=action.payload
      }
      break;
    }
    default:
      throw new Error(`non existent action: ${action.type}`);
  }
})