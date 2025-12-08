import React from 'react'
import '../styles/variables.css'
import '../styles/shared.css'
import RoleSwitcher from '../components/RoleSwitcher'
import PasswordField from '../components/PasswordField'

export default function RegisterUser() {
  return (
    <div className="page">
      <main className="card" role="main">
        <div className="card-center">
          <h1>Create account</h1>
          <p className="lead">Sign up to start ordering</p>
          <RoleSwitcher mode="register" />
        </div>

        <form className="form">
          <div className="field">
            <label>Name</label>
            <input type="text" placeholder="Your full name" />
          </div>

          <div className="field">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" />
          </div>

          <PasswordField showStrength />

          <div className="actions">
            <button className="btn primary" type="button">Create account</button>
            <button className="btn ghost" type="button">Cancel</button>
          </div>

          <div className="meta">Already have an account? <a className="link" href="/user/login">Login</a></div>
        </form>
      </main>
    </div>
  )
}
