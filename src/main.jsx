import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Header } from './components/Header'
import { Register } from './components/Register'

const router = createBrowserRouter([
  { path: "/", element: <Header /> },
  { path: "/register", element: <Register /> },
])

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    
  </StrictMode>,
)
