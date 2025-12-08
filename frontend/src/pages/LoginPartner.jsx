import React from 'react'
import '../styles/variables.css'
import '../styles/shared.css'
import RoleSwitcher from '../components/RoleSwitcher'
import PasswordField from '../components/PasswordField'

export default function LoginPartner() {
  return (
    <div className="page">
      <main className="card" role="main" data-role="partner">
        <div className="card-center">
          <h1>Partner login</h1>
          <p className="lead">Access your partner dashboard</p>
          <RoleSwitcher mode="login" />
        </div>

        <form className="form">
          <div className="field">
            <label>Email</label>
            <input type="email" placeholder="partner@example.com" />
          </div>

          <PasswordField />

          <div className="actions">
            <button className="btn primary" type="button">Sign in</button>
            <button className="btn ghost" type="button">Forgot</button>
          </div>

          <div className="meta">Need an account? <a className="link" href="/food-partner/register">Create one</a></div>
        </form>
      </main>
    </div>
  )
}
