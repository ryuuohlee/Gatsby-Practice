import React from 'react'
import Layout from '../components/Layout';
import styled from 'styled-components';

const about = () => {
  return (
    <Layout>
      <Wrapper>
        <h1>about page</h1>
        <p className="text">Lorem ipsum.</p>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  color: blue;
  h1 {
    color: yellowgreen;
  }
  
  text {
    text-transform: uppercase;
  }
`

export default about;