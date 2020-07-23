/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as types from './actionsTypes'

export const setUserId = (string:string) => ({
  type: types.SET_USER_ID,
  payload: string,
});

export const setUserName = (string:string) => ({
  type: types.SET_USER_NAME,
  payload: string,
});

export const setAnonymous = (string:string) => ({
  type: types.SET_ANONYMOUS,
  payload: string,
});

export const setEmail = (string:string) => ({
  type: types.SET_EMAIL,
  payload: string,
});

export const setAddress = (string:string) => ({
  type: types.SET_ADDRESS,
  payload: string,
});

export const setKarma = (string:number) => ({
  type: types.SET_KARMA,
  payload: string,
});

export const addKarma = () => ({
  type: types.ADD_KARMA,
});

export const setUserRequests = (array:object[]) => ({
  type: types.SET_USER_REQUESTS,
  payload: array,
});

export const addUserRequests = (object:object) => ({
  type: types.ADD_USER_REQUESTS,
  payload: object,
});

export const removeUserRequests = (id:string) => ({
  type: types.REMOVE_USER_REQUESTS,
  payload: id,
});

export const setUserTasks = (array:object[]) => ({
  type: types.SET_USER_TASKS,
  payload: array,
});

export const addUserTasks = (object:object) => ({
  type: types.ADD_USER_TASKS,
  payload: object,
});

export const removeUserTasks = (id:string) => ({
  type: types.REMOVE_USER_TASKS,
  payload: id,
});

export const setAppTasks = (array:object[]) => ({
  type: types.SET_APP_TASKS,
  payload: array,
});

export const addAppTasks = (object:object) => ({
  type: types.ADD_APP_TASKS,
  payload: object,
});

export const removeAppTasks = (id:string) => ({
  type: types.REMOVE_APP_TASKS,
  payload: id,
});

export const setCurrentTask = (array:object[]) => ({
  type: types.SET_CURRENT_TASK,
  payload: array,
});

export const loginOut = () => ({
  type: types.LOGIN_OUT,
});