/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import { StateProvider, W_App } from './store.js'

export default function App() {
  return (
    <StateProvider>
      <W_App />
    </StateProvider>
  )
}
