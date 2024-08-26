import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet} from 'react-router-dom'

export default function Layout() {
  return (
    <div className='d-flex flex-column' style={{ minHeight: '100vh' }}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
