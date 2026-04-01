import React, { useState, useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { DeleteUser, EditUser, GetAllUsers } from '../../services/Manageuser'

interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
}

const Home: React.FC = () => {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const { deleteUser } = DeleteUser()
  const { editUser } = EditUser()
  const { fetchAllUsers } = GetAllUsers()

  useEffect(() => {
    loadUsers()
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
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await deleteUser(userId)
        setUsers(users.filter(user => user.id !== userId))
        alert('User deleted successfully')
      } catch (err) {
        console.error('Error deleting user:', err)
        alert('Failed to delete user')
      }
    }
  }

  const handleEdit = (userId: string) => {
    // Navigate to edit page or open edit modal
    console.log('Edit user:', userId)
    alert('Edit functionality to be implemented')
  }

  return (
    <div>
      <div>
        <h2>Welcome Home</h2>
        <p>This is your application dashboard. Navigate through the menu to explore different sections.</p>
        <div>
          <Link to="/register">
            <div>
              <h3>📋 Register</h3>
              <p>Create a new account</p>
            </div>
          </Link>
          <Link to="/login">
            <div>
              <h3>🔐 Login</h3>
              <p>Access your account</p>
            </div>
          </Link>

          <div id="table">
            <h2>Registered Users</h2>
            {loading ? (
              <p>Loading users...</p>
            ) : (
              <>
                <div style={{ 
                  backgroundColor: '#f5f5f5', 
                  padding: '10px', 
                  marginBottom: '10px',
                  borderRadius: '4px',
                  fontWeight: 'bold'
                }}>
                  <p>User Management System - Total Users: {users.length + 1}</p>
                </div>
                <table border={1} cellPadding="10" cellSpacing="0" style={{ width: '100%' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#e0e0e0' }}>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Hardcoded entry */}
                    <tr style={{ backgroundColor: '#fffacd' }}>
                      <td>John</td>
                      <td>Doe</td>
                      <td>john.doe@example.com</td>
                      <td>1234567890</td>
                      <td>
                        <button 
                          onClick={() => handleEdit('hardcoded-1')}
                          style={{ marginRight: '10px' }}
                          title="Edit"
                        >
                          ✏️
                        </button>
                        <button 
                          onClick={() => handleDelete('hardcoded-1')}
                          title="Delete"
                          style={{ color: 'red' }}
                        >
                          🗑️
                        </button>
                      </td>
                    </tr>
                    {/* Dynamic entries */}
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>
                          <button 
                            onClick={() => handleEdit(user.id)}
                            style={{ marginRight: '10px' }}
                            title="Edit"
                          >
                            ✏️
                          </button>
                          <button 
                            onClick={() => handleDelete(user.id)}
                            title="Delete"
                            style={{ color: 'red' }}
                          >
                            🗑️
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div style={{ 
                  backgroundColor: '#f5f5f5', 
                  padding: '10px', 
                  marginTop: '10px',
                  borderRadius: '4px',
                  textAlign: 'right',
                  fontStyle: 'italic'
                }}>
                  <p>Showing {users.length + 1} of {users.length + 1} users</p>
                </div>
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home
