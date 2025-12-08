import React from 'react'
import '../styles/variables.css'
import '../styles/shared.css'
import RoleSwitcher from '../components/RoleSwitcher'
import PasswordField from '../components/PasswordField'

export default function RegisterPartner() {
  return (
    <div className="page">
      <main className="card" role="main" data-role="partner">
        <div className="card-center">
          <h1>Partner sign up</h1>
          <p className="lead">Create a food-partner account</p>
          <RoleSwitcher mode="register" />
        </div>

        <form className="form">
          <div className="field">
            <label>Business name</label>
            <input type="text" placeholder="Restaurant or business name" />
          </div>

          <div className="field">
            <label>Email</label>
            <input type="email" placeholder="partner@example.com" />
          </div>

          <div className="row">
            <div className="field">
              <label>Phone</label>
              <input type="tel" placeholder="Phone number" />
            </div>
            <div className="field">
              <label>City</label>
              <input type="text" placeholder="City" />
            </div>
          </div>

          <PasswordField showStrength />

          <div className="actions">
            <button className="btn primary" type="button">Create account</button>
            <button className="btn ghost" type="button">Cancel</button>
          </div>

          <div className="meta">Already registered? <a className="link" href="/food-partner/login">Login</a></div>
        </form>
      </main>
    </div>
  )
}
