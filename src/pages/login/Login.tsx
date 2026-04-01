import React from 'react'

const Login: React.FC = () => {
  return (
    <div>
      <div>
        <h2>Sign In</h2>
        <form>
          <div>
            <label>
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label>
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
