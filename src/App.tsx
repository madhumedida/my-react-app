import { RouterProvider } from '@tanstack/react-router'
import './App.css'
import router from './components/route/router'

function App() {
  return <RouterProvider router={router} />
}

export default App
