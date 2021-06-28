// sign up
export async function signUp(username, email, password, d) {
  let myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  let raw = JSON.stringify({
    username: username,
    email: email,
    password: password,
  });

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  fetch('http://35.236.73.215/user/signup', requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      localStorage.setItem('user', result);
    })
    .catch((error) => {
      d('setError', { error });
      console.log('error', error);
    });
}

// create project
export async function createProject(projectName, d) {
  let myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  let user = localStorage.getItem('user');
  user = JSON.parse(user);
  let token = user.token;

  myHeaders.append('Authorization', 'Bearer ' + token);
  if (!token) {
    console.log('No User found signup or login');
    d('setError', { error: 'No User found signup or login' });
    return;
  }

  let raw = JSON.stringify({
    projectName: projectName,
  });

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  fetch('http://35.236.73.215/project', requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      d('setProjectId', { projectId: result.project_id });
    })
    .catch((error) => {
      d('setError', { error });
      console.log('error', error);
    });
}

// create query
export async function createQuery(title, query, chartType, projectId, d) {
  let myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  let user = localStorage.getItem('user');
  user = JSON.parse(user);
  let token = user.token;

  myHeaders.append('Authorization', 'Bearer ' + token);
  if (!token) {
    console.log('No User found signup or login');
    d('setError', { error: 'No User found signup or login' });
    return;
  }

  let raw = JSON.stringify({
    title: title,
    query: query,
    chartType: chartType,
    projectId: projectId,
  });

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  fetch('http://35.236.73.215/query', requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      d('setQueryId', { queryId: result.query_id });
    })
    .catch((error) => {
      d('setError', { error });
      console.log('error', error);
    });
}

//get query
export async function getQuery(queryId, d) {
  let myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  let requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  fetch('http://35.236.73.215/query/' + queryId, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      d('setTitle', { title: result.title });
      d('setOutputQuery', { query: result.query });
      d('setChartType', { chartType: result.chart_type });
    })
    .catch((error) => {
      d('setError', { error });
      console.log('error', error);
    });
}

// get result
export async function getResult(query, d) {
  let myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  console.log('come here');
  let raw = JSON.stringify({ query: query });

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  fetch('http://35.236.73.215/connect', requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      d('setResult', { result });
    })
    .catch((error) => {
      d('setError', { error });
      console.log('error', error);
    });
}
