import React from 'react'
import { Link } from '@tanstack/react-router'

const Nav: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-neutral-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-0 flex gap-6">
        <div className="group relative">
          <Link to="/" className="block text-neutral-900 font-semibold hover:text-blue-600 px-3 py-3 transition-colors">
            Home
          </Link>
          <div className="absolute hidden group-hover:block bg-white border border-neutral-200 rounded shadow-lg mt-0 min-w-max">
            <Link to="/child/child1" className="block px-4 py-2 text-neutral-900 hover:bg-neutral-50 transition-colors">
              Child 1
            </Link>
          </div>
        </div>
        <Link to="/register" className="text-neutral-900 font-semibold hover:text-blue-600 px-3 py-3 transition-colors">
          Register
        </Link>
        <Link to="/login" className="text-neutral-900 font-semibold hover:text-blue-600 px-3 py-3 transition-colors">
          Login
        </Link>
        <Link to="/about" className="text-neutral-900 font-semibold hover:text-blue-600 px-3 py-3 transition-colors">
          About
        </Link>
      </div>
    </nav>
  )
}

export default Nav
