import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-50 to-pink-50 border-b border-gray-200 py-6 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="section-title">My React App</h1>
        <p className="section-description">Welcome to your application</p>
      </div>
    </header>
  )
}

export default Header
