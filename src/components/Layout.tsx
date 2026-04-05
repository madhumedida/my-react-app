import { Outlet } from '@tanstack/react-router'
import Footer from './Footer'
import Header from './Header'
import Nav from './Nav'
import React from 'react'

const Layout: React.FC = () => {
  return (
    <div className="app-shell">
      <Nav />
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout