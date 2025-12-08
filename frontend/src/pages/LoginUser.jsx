import React from 'react'
import '../styles/variables.css'
import '../styles/shared.css'
import RoleSwitcher from '../components/RoleSwitcher'
import PasswordField from '../components/PasswordField'

export default function LoginUser() {
  return (
    <div className="page">
      <main className="card" role="main">
        <div className="card-center">
          <h1>Welcome back</h1>
          <p className="lead">Log in to your account</p>
          <RoleSwitcher mode="login" />
        </div>

        <form className="form">
          <div className="field">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" />
          </div>

          <PasswordField />

          <div className="actions">
            <button className="btn primary" type="button">Sign in</button>
            <button className="btn ghost" type="button">Forgot</button>
          </div>

          <div className="meta">New here? <a className="link" href="/user/register">Create account</a></div>
        </form>
      </main>
    </div>
  )
}
