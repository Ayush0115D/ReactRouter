import React from 'react'
import Header from './Header/header'
import Footer from './Footer/footer'
import { Outlet } from 'react-router-dom'

function layout() {
  return (
    <>
    <Header/>
    <Outlet/>   {/* /FOR nesting in react router dom  //nesting ke top level pe layout diya he */}
    <Footer/>

    

    </>
  )
}

export default layout