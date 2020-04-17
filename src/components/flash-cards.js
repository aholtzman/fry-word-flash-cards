import React, { useState, useEffect } from 'react'
import { shuffleArray } from './shared'

export default ({ data, back }) => {
  const [ display, setDisplay ] = useState(0)
  const [ correct, setCorrect ] = useState(0)
  const btnStyle = { padding: '1rem 3rem', margin: '1rem', backgroundColor: 'rebeccapurple', color: 'white', fontWeigth: '700', fontSize: '1.5rem', fonstSize: '1rem', border: 0, cursor: 'pointer'}
  shuffleArray(data)

  return (
    <div style={{minHeight: '80vh', display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
      <h1 style={{textAlign: 'center', fontSize: '6rem', padding: '2rem', margin: 'auto'}}>{ data[display] || correct }</h1>
      <div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <button
          style={btnStyle}
          disabled={!data[display]}
          onClick={() => {
            setDisplay( display + 1 )
            setCorrect( correct + 1 )
          }}>got it</button>
        <button style={btnStyle} onClick={() => setDisplay( display + 1 )}>skip</button>
      </div>
      <p onClick={back}>return to list</p>
      </div>
    </div>
  )
}
