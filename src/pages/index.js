import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Cards from '../components/flash-cards'

import one from '../data/one'
import two from '../data/two'
import three from '../data/three'
import four from '../data/four'

export default () => {
  const [ level, setLevel ] = useState(0)
  const lvl = { padding: '2rem', width: '200px', margin: '1rem', textAlign: 'center', borderRadius: '10px', width: '100%', fontSize: '2rem'}
  return(
  <Layout>
    <SEO title="Home" />
    {level === 0 && <>
    <div style={{...lvl, backgroundColor: 'red', color: 'white'}} onClick={() => setLevel(1)}>Level 1</div>
    <div style={{...lvl, backgroundColor: 'blue', color: 'white'}}onClick={() => setLevel(2)}>Level 2</div>
    <div style={{...lvl, backgroundColor: 'green', color: 'white'}}onClick={() => setLevel(3)}>Level 3</div>
    <div style={{...lvl, backgroundColor: 'darkorange', color: 'white'}}onClick={() => setLevel(4)}>Level 4</div>
    </>}
    {level === 1 && <Cards data={one} back={() => setLevel(0)} />}
    {level === 2 && <Cards data={two} back={() => setLevel(0)} />}
    {level === 3 && <Cards data={three} back={() => setLevel(0)} />}
    {level === 4 && <Cards data={four} back={() => setLevel(0)} />}
  </Layout>
)}
