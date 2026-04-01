interface FormErrors {
  email?: string
  phone?: string
}

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
}

export const validateRegisterForm = (formData: FormData): FormErrors => {
  const errors: FormErrors = {}

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(formData.email)) {
    errors.email = 'Please enter a valid email address'
  }

  const phonePattern = /^[0-9]{10,}$/
  if (!phonePattern.test(formData.phone)) {
    errors.phone = 'Please enter a valid phone number (at least 10 digits)'
  }

  return errors
}
