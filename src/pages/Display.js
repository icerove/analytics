import React from 'react'
import {Form, Button, Container} from "react-bootstrap";
import { d } from '../store'
import {getQuery, getResult} from "../effects/index"

export default function Display({ state }) {

  const handleSubmit = async (event) => {
    event.preventDefault();
    await getQuery(state.get('queryId'),d)
  }
  const getQueryResult = async () => {
    await getResult(state.get('outputQuery'),d)
  }
  return (
  <Container>
    <Container>
      <h3>Get Query</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="queryId">
          <Form.Label>QueryId</Form.Label>
          <Form.Control
            autoFocus
            type="number"
            value={state.get('queryId')}
            onChange={(e) => d('setQueryId',{queryId:e.target.value})}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!state.get('queryId')}>
          Get Query
        </Button>
      </Form>
    </Container>
    <p>Query: {state.get('outputQuery')}</p>
    <Button block size="lg" onClick={getQueryResult} disabled={!state.get('outputQuery')}>
        Get Result
    </Button>
    {state.get('result') &&
        <Container>
          {state.get('result').length > 0 ?
          (<p>{JSON.stringify(state.get('result'))}</p>):
          (<p>{JSON.stringify(state.get('result')[0])}</p>)
          }
        
      </Container>
    }

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
