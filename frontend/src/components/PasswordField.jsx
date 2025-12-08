import React, { useState, useMemo } from 'react'

function scorePassword(pw = '') {
  let score = 0
  if (pw.length >= 8) score += 2
  if (pw.length >= 12) score += 1
  if (/[A-Z]/.test(pw)) score += 1
  if (/[0-9]/.test(pw)) score += 1
  if (/[^A-Za-z0-9]/.test(pw)) score += 1
  return Math.min(score, 6)
}

export default function PasswordField({ placeholder = 'Password', showStrength = false }) {
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState('')

  const score = useMemo(() => scorePassword(value), [value])
  const pct = Math.round((score / 6) * 100)

  return (
    <div className="field password-field">
      <label>Password</label>
      <div className="pw-row">
        <input
          type={visible ? 'text' : 'password'}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="button" className="pw-toggle" aria-label="Toggle password visibility" onClick={() => setVisible(v => !v)}>
          {visible ? 'Hide' : 'Show'}
        </button>
      </div>

      {showStrength && (
        <div className="pw-strength">
          <div className="pw-bar" style={{width: pct + '%', background: `linear-gradient(90deg, rgba(var(--primary-rgb),0.95), rgba(0,200,120,0.9))`}} />
          <div className="pw-note">{value.length === 0 ? 'Enter a password' : (pct < 50 ? 'Weak' : pct < 80 ? 'Okay' : 'Strong')}</div>
        </div>
      )}
    </div>
  )
}
