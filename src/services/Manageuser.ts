interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
}

interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
}

export const GetAllUsers = () => {
  const fetchAllUsers = async () => {
    const resp = await fetch('http://localhost:3000/usermanagement/getall')
    if (!resp.ok) {
      throw new Error(`Failed to fetch users: ${resp.status}`)
    }
    const data = await resp.json()
    return data as User[]
  }

  return {
    fetchAllUsers,
  }
}

export const Adduser = () => {
  const submitForm = async (formData: FormData) => {
    const resp = await fetch('http://localhost:3000/usermanagement/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    if (!resp.ok) {
      throw new Error(`Server error ${resp.status}`)
    }
    const result = await resp.json()
    return result
  }

  return {
    submitForm,
  }
}

export const DeleteUser = () => {
  const deleteUser = async (userId: string) => {
    const resp = await fetch(`http://localhost:3000/usermanagement/${userId}`, {
      method: 'DELETE',
    })
    if (!resp.ok) {
      throw new Error(`Server error ${resp.status}`)
    }
    const result = await resp.json()
    return result
  }

  return {
    deleteUser,
  }
}

export const EditUser = () => {
  const editUser = async (userId: string, formData: FormData) => {
    const resp = await fetch(`http://localhost:3000/usermanagement/${userId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    if (!resp.ok) {
      throw new Error(`Server error ${resp.status}`)
    }
    const result = await resp.json()
    return result
  }

  return {
    editUser,
  }
}
