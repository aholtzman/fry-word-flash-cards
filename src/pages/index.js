import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Cards from '../components/flash-cards'

import one from '../data/one'
import two from '../data/two'

export default () => {
  const [ level, setLevel ] = useState(0)
  const lvl = { padding: '2rem', width: '200px', margin: '1rem', textAlign: 'center', borderRadius: '10px', width: '100%', fontSize: '2rem'}
  return(
  <Layout>
    <SEO title="Home" />
    {level === 0 && <>
    <div style={{...lvl, backgroundColor: 'red', color: 'white'}} onClick={() => setLevel(1)}>Level 1</div>
    <div style={{...lvl, backgroundColor: 'blue', color: 'white'}}onClick={() => setLevel(2)}>Level 2</div>
    </>}
    {level === 1 && <Cards data={one} back={() => setLevel(0)} />}
    {level === 2 && <Cards data={two} back={() => setLevel(0)} />}
  </Layout>
)}
