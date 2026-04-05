import React, { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { useAtom } from 'jotai'
import { usersAtom } from '../../hooks/userAtoms'
import { DeleteUser, GetAllUsers } from '../../services/Manageuser'

const Home: React.FC = () => {
  const [users, setUsers] = useAtom(usersAtom)
  const [loading, setLoading] = useState(true)
  const { deleteUser } = DeleteUser()
  const { fetchAllUsers } = GetAllUsers()

  useEffect(() => {
    loadUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const loadUsers = async () => {
    try {
      const data = await fetchAllUsers()
      setUsers(data)
    } catch (err) {
      console.error('Error fetching users:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (userId: string) => {
    if (!window.confirm('Are you sure you want to delete this user?')) {
      return
    }

    try {
      await deleteUser(userId)
      setUsers(users.filter((user) => user.id !== userId))
      alert('User deleted successfully')
    } catch (err) {
      console.error('Error deleting user:', err)
      alert('Failed to delete user')
    }
  }

  const handleEdit = (userId: string) => {
    // Placeholder for future edit popup implementation
    console.log('Edit user:', userId)
    alert('Edit functionality will be added in a later update.')
  }

  return (
    <section className="page-content">
      <div className="page-header">
        <div>
          <h1 className="page-title">Welcome Home</h1>
          <p className="page-description">
            This is your application dashboard. Navigate through the menu to explore different sections.
          </p>
        </div>
      </div>

      <div className="card-grid">
        <article className="info-card">
          <h3>📋 Register</h3>
          <p>Create a new account using the registration page.</p>
          <Link className="btn-secondary" to="/register">
            Go to Register
          </Link>
        </article>

        <article className="info-card">
          <h3>🔐 Login</h3>
          <p>Access your account through the login page.</p>
          <Link className="btn-secondary" to="/login">
            Go to Login
          </Link>
        </article>
      </div>

      <div className="section-card">
        <div className="section-heading">
          <div>
            <h2 className="section-title">Registered Users</h2>
            <p className="section-description">
              This table shows the current users stored by the application.
            </p>
          </div>
          <span className="user-count">Total users: {users.length}</span>
        </div>

        {loading ? (
          <p className="status-message">Loading users...</p>
        ) : users.length === 0 ? (
          <p className="status-message">No registered users found.</p>
        ) : (
          <div className="table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td className="actions-cell">
                      <button onClick={() => handleEdit(user.id)} className="btn-secondary" type="button">
                        ✏️ Edit
                      </button>
                      <button onClick={() => handleDelete(user.id)} className="btn-danger" type="button">
                        🗑️ Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  )
}

export default Home
