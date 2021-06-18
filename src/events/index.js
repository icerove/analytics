import { d } from '../store'

// database setup method
export const setUsername = (state, {username}) => {
  return state.set('username', username)
}
export const setEmail = (state, {email}) => {
  return state.set('email', email)
}

export const setPassword = (state, {password}) => {
  return state.set('password', password)
}

export const setProjectName = (state, {projectName}) => {
  return state.set('projectName', projectName)
}

export const setTitle = (state, {title}) => {
  return state.set('title', title)
}

export const setInputQuery = (state, {query}) => {
  return state.set('query', query)
}

export const setChartType = (state, {chartType}) => {
  return state.set('chartType', chartType)
}

// database get method

export const setProjectId = (state, {projectId}) => {
  return state.set('projectId', projectId)
}

export const setQueryId = (state, {queryId}) => {
  return state.set('queryId', queryId)
}

// connector method

export const setResult = (state, {result}) => {
  return state.set('result', result)
}

export const setOutputQuery = (state, {query}) => {
  return state.set('outputQuery', query)
}

// error
export const setError = (state, {error}) => {
  return state.set('error', error)
}

// do not edit
export const goPath = (state, { path }) => {
  
    const url = new URL(window.location)
    url.pathname = path
    window.history.pushState({}, '', url)
  

  return state.set('path', path)
}

export const _setState = (_state, { newState }) => {
  return newState
}


  window.setState = (newState) => {
    d('_setState', { newState })
  }

