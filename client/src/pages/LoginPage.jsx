import React from 'react'
import LoginForm from '../components/LoginForm'
import useLogin from '../hooks/useLogin'

const LoginPage = () => {
  const { handleLogin, error, loading, userData } = useLogin();
  console.log(userData)
  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <h2>Role Based Access Control</h2>
          <LoginForm onSubmit={handleLogin} loading={loading} error={error} />
          {error && <p className="error-text">{error}</p>}
        </div>
      </div>
    </>
  )
}

export default LoginPage
