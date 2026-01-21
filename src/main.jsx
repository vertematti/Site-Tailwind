import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import { router } from './router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <h3 className="text-center pt-4 text-3xl" >React Supabase Auth & Content</h3>
      <RouterProvider router={router} />
    </>
  </StrictMode>,
)
