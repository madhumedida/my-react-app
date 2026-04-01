import React from 'react'
import { Link } from '@tanstack/react-router'



const Nav: React.FC = () => {
  return (
    <nav className="relative flex gap-6 px-6 py-4 bg-gray-100 border-b border-gray-300">
      <div className="group relative">
        <Link to="/" className="text-gray-800 font-semibold hover:bg-gray-200 px-3 py-2 rounded transition-colors">Home</Link>
        <div className="absolute hidden group-hover:block bg-white border border-gray-300 rounded shadow-lg mt-1">
          <Link to="/child/child1" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Child 1</Link>
        </div>
      </div>
      <Link to="/register" className="text-gray-800 font-semibold hover:bg-gray-200 px-3 py-2 rounded transition-colors">Register</Link>
      <Link to="/login" className="text-gray-800 font-semibold hover:bg-gray-200 px-3 py-2 rounded transition-colors">Login</Link>
      <Link to="/about" className="text-gray-800 font-semibold hover:bg-gray-200 px-3 py-2 rounded transition-colors">About</Link>
    </nav>
  
  )
}

export default Nav
