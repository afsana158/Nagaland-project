import React from 'react'
import Layout from '../components/Layout.jsx'
import Section1 from './HomePages/Section1.jsx'
import Section2 from './HomePages/Section2.jsx'
import Section3 from './HomePages/Section3.jsx'
import Section4 from './HomePages/Section4.jsx'
import Section5 from './HomePages/Section5.jsx'
import Section6 from './HomePages/Section6.jsx'


function Home() {
  return (
    <Layout>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </Layout>
  )
}

export default Home