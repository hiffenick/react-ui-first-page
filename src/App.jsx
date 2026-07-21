import React from 'react'
import { Section1 } from './components/Section1/Section1.jsx/Section1'
import { Section2 } from './components/Section1/Section2/Section2'

export const App = () => {
  return (
    <div className="main">
      <Section1 />
      <Section2 />
    </div>
  )
}

export default App