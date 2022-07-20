import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import "./layout.css"

const Layout = ({ children }) => {
  return (
    // the <> represents React.fragment
    <> 
      <Navbar />
        {children}
      <Footer />
    </>
  )
}

export default Layout