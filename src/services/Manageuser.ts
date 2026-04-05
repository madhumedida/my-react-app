interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
}

export interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
}

const API_BASE = 'http://localhost:3000/usermanagement'

const parseResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    throw new Error(`Server error ${response.status}`)
  }
  return response.json()
}

export const GetAllUsers = () => {
  const fetchAllUsers = async () => {
    const resp = await fetch(`${API_BASE}/getall`)
    return parseResponse<User[]>(resp)
  }

  return {
    fetchAllUsers,
  }
}

export const Adduser = () => {
  const submitForm = async (formData: FormData) => {
    const resp = await fetch(`${API_BASE}/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    return parseResponse<unknown>(resp)
  }

  return {
    submitForm,
  }
}

export const DeleteUser = () => {
  const deleteUser = async (userId: string) => {
    const resp = await fetch(`${API_BASE}/${userId}`, {
      method: 'DELETE',
    })
    return parseResponse<unknown>(resp)
  }

  return {
    deleteUser,
  }
}

export const EditUser = () => {
  const editUser = async (userId: string, formData: FormData) => {
    const resp = await fetch(`${API_BASE}/${userId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    return parseResponse<unknown>(resp)
  }

  return {
    editUser,
  }
}
