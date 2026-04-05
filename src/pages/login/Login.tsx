import React from 'react'

const Login: React.FC = () => {
  return (
    <section className="page-content">
      <div className="section-card">
        <h1 className="section-title">Sign In</h1>
        <p className="section-description">Enter your credentials to access your account</p>
        <form className="form-grid">
          <div className="form-field">
            <label className="form-label" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              className="form-input"
              type="email"
              placeholder="you@example.com"
            />
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              className="form-input"
              type="password"
              placeholder="••••••••"
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="btn-primary">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Login
