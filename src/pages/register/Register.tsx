import React, { useState } from 'react'
import { Adduser } from '../../services/Manageuser'
import { validateRegisterForm } from '../../validations/register/register-val'

const Register: React.FC = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [errors, setErrors] = useState<{ email?: string; phone?: string }>({})

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
        console.log('response', result)
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
    <div>
      <div>
        <h2>Create Account</h2>
        
        <form onSubmit={handleSubmit} noValidate>
          <div>
            <label htmlFor="firstName">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="John"
            />
          </div>

          <div>
            <label htmlFor="lastName">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Doe"
            />
          </div>

          <div>
            <label htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="john@example.com"
            />
            {errors.email && (
              <span>{errors.email}</span>
            )}
          </div>

          <div>
            <label htmlFor="phone">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              placeholder="1234567890"
            />
            {errors.phone && (
              <span>{errors.phone}</span>
            )}
          </div>

          <button
            type="submit"
          >
            Create Account
          </button>
        </form>

        <p>
          Already have an account? <a href="#">Sign in</a>
        </p>
      </div>
    </div>
  )
}

export default Register
