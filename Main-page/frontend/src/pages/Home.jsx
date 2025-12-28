import React from 'react'
import Layout from '../components/Layout.jsx'
import Section1 from './HomePages/Section1.jsx'
import Section2 from './HomePages/Section2.jsx'

function Home() {
  return (
    <Layout>
      <Section1 />
      <Section2 />
    </Layout>
  )
}

export default Home