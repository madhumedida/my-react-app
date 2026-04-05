import React, { useState } from 'react'
import { useAtom } from 'jotai'
import { Adduser } from '../../services/Manageuser'
import { validateRegisterForm } from '../../validations/register/register-val'
import { usersAtom } from '../../hooks/userAtoms'
import type { User } from '../../hooks/userAtoms'

type FormErrors = {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
}

const Register: React.FC = () => {
  const [users, setUsers] = useAtom(usersAtom)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [errors, setErrors] = useState<FormErrors>({})

  const { submitForm } = Adduser()

  const resetForm = () => {
    setFirstName('')
    setLastName('')
    setEmail('')
    setPhone('')
    setErrors({})
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const formData = { firstName, lastName, email, phone }
    const validationErrors = validateRegisterForm(formData)

    if (Object.keys(validationErrors).length === 0) {
      setErrors({})
      try {
        const result = await submitForm(formData)
        const createdUser: User = result as User

        setUsers([...users, createdUser])
        alert('Form submitted successfully')
        resetForm()
      } catch (err) {
        console.error('submit error', err)
        alert('Failed to submit form')
      }
    } else {
      setErrors(validationErrors)
    }
  }

  return (
    <section className="page-content">
      <div className="section-card">
        <h1 className="section-title">Create Account</h1>
        <p className="section-description">Fill in the details below to register a new user.</p>

        <form onSubmit={handleSubmit} noValidate className="form-grid">
          <div className="form-field">
            <label className="form-label" htmlFor="firstName">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="John"
              className="form-input"
            />
            {errors.firstName && <span className="form-error">{errors.firstName}</span>}
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="lastName">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Doe"
              className="form-input"
            />
            {errors.lastName && <span className="form-error">{errors.lastName}</span>}
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@example.com"
              className="form-input"
            />
            {errors.email && <span className="form-error">{errors.email}</span>}
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="phone">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="1234567890"
              className="form-input"
            />
            {errors.phone && <span className="form-error">{errors.phone}</span>}
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-primary">
              Create Account
            </button>
            <button type="button" className="btn-secondary" onClick={resetForm}>
              Reset
            </button>
          </div>
        </form>

        <p className="info-text">
          Already have an account? <a href="#">Sign in</a>
        </p>
      </div>
    </section>
  )
}

export default Register
