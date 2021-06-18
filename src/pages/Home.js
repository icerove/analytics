import React from 'react'
import {Form, Button, Container} from "react-bootstrap";
import { d } from '../store'
import {signUp, createProject, createQuery} from "../effects/index"
import "./Home.css"

export default function Home({ state }) {
  function validateForm() {
    return state.get('username').length >0 && state.get('email').length > 0 && state.get('password').length > 0;
  }
  function validateQuery() {
    return state.get('title').length >0 
    && state.get('query').length > 0 
    && state.get('chartType').length > 0
    && typeof(state.get('projectId')) === 'number'
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    await signUp(state.get('username'),state.get('email'), state.get('password'),d)
  }
  const createProjectSubmit = async (event) => {
    event.preventDefault();
    await createProject(state.get('projectName'),d)
  }
  const createQuerySubmit = async (event) => {
    event.preventDefault();
    await createQuery(state.get('title'),state.get('query'),state.get('chartType'),state.get('projectId'),d)
  }
  return (
  <Container>
    <Container>
      <h3>Sign Up form</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={state.get('username')}
            onChange={(e) => d('setUsername',{username:e.target.value})}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={state.get('email')}
            onChange={(e) => d('setEmail',{email:e.target.value})}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={state.get('password')}
            onChange={(e) => d('setPassword',{password:e.target.value})}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Sign Up
        </Button>
      </Form>
    </Container>
    <Container>
        <h3>Create Project</h3>
        <Form onSubmit={createProjectSubmit}>
        <Form.Group size="lg" controlId="projectName">
          <Form.Label>Project Name</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={state.get('projectName')}
            onChange={(e) => d('setProjectName',{projectName:e.target.value})}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={state.get('projectName').length === 0}>
          Create Project
        </Button>
      </Form>
      <p>project id {state.get('projectId')}</p>
    </Container>
    <Container>
        <h3>Create Query</h3>
        <Form onSubmit={createQuerySubmit}>
        <Form.Group size="lg" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={state.get('title')}
            onChange={(e) => d('setTitle',{title:e.target.value})}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="query">
          <Form.Label>Query</Form.Label>
          <Form.Control
            as="textarea" 
            rows={5}
            autoFocus
            type="text"
            value={state.get('query')}
            onChange={(e) => d('setInputQuery',{query:e.target.value})}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="query">
          <Form.Label>Query</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={state.get('chartType')}
            onChange={(e) => d('setChartType',{chartType:e.target.value})}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateQuery()}>
          Create Query
        </Button>
      </Form>
      <p>query id {state.get('queryId')}</p>
    </Container>
    <style>{`
    .container {
      width: 80%;
      max-width: 1200px;
      margin: auto;
      margin-top: 50px;
      margin-bottom: 32px;
      text-align: center;
      font-family: 'Inter', sans-serif;
    }
    `}
    </style>
  </Container>
  )
}
