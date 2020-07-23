/* eslint-disable @typescript-eslint/no-explicit-any */
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducer from './src/client/Reducer/rootReducer'

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store