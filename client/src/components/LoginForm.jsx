import { useState } from 'react';
import '../styles/Login.css'


function LoginForm({ onSubmit, loading }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState({})

  const handleSubmit = async(e) => {
    e.preventDefault()
    const newError = {}

    if (!email) {
      newError.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newError.email = "Email is invalid"
    }

    if (!password) {
      newError.password = "Password is required"
    } else if (password.length < 6) {
      newError.password = "Password must be at least 6 characters"
    }

    setError(newError)

    if (Object.keys(newError).length === 0) {
      console.log("Login attempt:", { email, password })
      // Handle login logic here
      try {
        await onSubmit({ email, password });
      } catch (err) {
        const errorMessage =
          err?.response?.data?.message || err.message || 'Login failed';

        setError(errorMessage);
        console.error('Login error:', err);
      }
    }
  }

  if(loading) return <div>Loading...</div>

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`form-input ${error.email ? "form-input-error" : ""}`}
          placeholder="Enter your email"
        />
        {error.email && <span className="error-message">{error.email}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`form-input ${error.password ? "form-input-error" : ""}`}
          placeholder="Enter your password"
        />
        {error.password && <span className="error-message">{error.password}</span>}
      </div>

      <button type="submit" className="login-button">
        Sign In
      </button>

      <div className="login-footer">
        <a href="#" className="forgot-password">
          Forgot your password?
        </a>
      </div>
    </form>

    // <form className="login-form" onSubmit={handleSubmit}>

    //   {error && <div className="error">{error}</div>}

    //   <input
    //     type="email"
    //     placeholder="Email"
    //     value={email}
    //     required
    //     onChange={(e) => setEmail(e.target.value)}
    //   />

    //   <input
    //     type="password"
    //     placeholder="Password"
    //     value={password}
    //     required
    //     onChange={(e) => setPassword(e.target.value)}
    //   />

    //   <button type="submit" disabled={loading}>
    //     {loading ? 'Logging in...' : 'Login'}
    //   </button>
    // </form>


  );
}

export default LoginForm;
