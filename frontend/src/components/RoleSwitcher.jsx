import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function RoleSwitcher({ mode = 'register' }) {
  const location = useLocation()
  const isUser = location.pathname.startsWith('/user')

  const userPath = `/user/${mode}`
  const partnerPath = `/food-partner/${mode}`

  return (
    <div className="role-switch" role="tablist" aria-label="Choose account type">
      <Link to={userPath} className={`btn small ${isUser ? 'primary' : 'ghost'}`} role="tab" aria-selected={isUser}>User</Link>
      <Link to={partnerPath} className={`btn small ${!isUser ? 'primary' : 'ghost'}`} role="tab" aria-selected={!isUser}>Food-Partner</Link>
    </div>
  )
}
