// store.js
import React, { createContext, useReducer, useContext } from 'react'
import * as events from './events'
import { Map } from 'immutable'
import router from './router'

const initialState = Map({
  username: '',
  email: '',
  password: '',
  projectName: '',
  title: '',
  query: '',
  chartType: 'line',
  projectId: '',
  userId: '',
  queryId: '',
  outputQuery: '',
  result: null,
  error: '',
  path:  window.location.pathname, // no edit
})
export const store = createContext(initialState)
const { Provider } = store

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    return events[action.type](state, action)
  }, initialState)
  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

let _d = (e) => {}

export function d(type, args = {}) {
  _d({ ...args, type })
}


  window.d = d


export function W_App() {
  let { state, dispatch } = useContext(store)
  _d = dispatch
  window.state = state
  
  let Page = router(state.get('path'))
  return <Page state={state} />
}
