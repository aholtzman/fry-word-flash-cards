import React, { useState, useEffect } from 'react'
import { shuffleArray } from './shared'

export default ({ data, back }) => {
  const [ display, setDisplay ] = useState(0)
  const [ correct, setCorrect ] = useState(0)
  const [ missed, setMissed ] = useState([])
  const btnStyle = { padding: '1rem 3rem', margin: '1rem', backgroundColor: 'rebeccapurple', color: 'white', fontWeigth: '700', fontSize: '1.5rem', fonstSize: '1rem', border: 0, cursor: 'pointer'}
  shuffleArray(data)

  return (
    <div style={{minHeight: '80vh', display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
      <h1 style={{textAlign: 'center', fontSize: '6rem', padding: '2rem', margin: 'auto'}}>{ data[display] || `score of ${correct}` }</h1>
      <div>
      <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
      {data[display] && (
        <>
          <button
            style={btnStyle}
            disabled={!data[display]}
            onClick={() => {
              setDisplay( display + 1 )
              setCorrect( correct + 1 )
            }}>got it</button>
          <button style={btnStyle} onClick={() => {
            setMissed( prevState => [ ...prevState, data[display] ] )
            setDisplay( display + 1 )
          }}>skip</button>
        </>
      )
      }
        {
          !data[display] && (
            <>
              {missed.map((word, index) => {
              return <h3 style={{margin: '1rem'}} key={index}>{word}</h3>
            })}
            </>
          )
        }
      </div>
      <p style={{marginTop: '3rem'}} onClick={back}>return to list</p>
      </div>
    </div>
  )
}
