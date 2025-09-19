import LoginForm from '../components/LoginForm'
import useLogin from '../hooks/useLogin'
import '../styles/Login.css'

const LoginPage = () => {
  const { handleLogin, error, loading, userData } = useLogin();
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="logo">
            <div className="logo-icon">🔐</div>
          </div>
          <h1 className="login-title">Welcome Back</h1>
          <p className="login-subtitle">Sign in to your account</p>
        </div>
        <LoginForm onSubmit={handleLogin} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default LoginPage
